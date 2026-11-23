# Confidential instructor guide ? not intended for candidates

Remove this file before distributing the repository. It contains solutions.

## Intentional bug 1: description persistence

**Location:** `backend/app/routes/blockers.py`, `update_description`. The handler adds the modified ORM object to the session but does not commit. The response serializes the in-memory change, and closing the session rolls back the uncommitted transaction.

**Reproduce independently of PATCH:** Seed and start the backend. In `/docs`, use `GET /blockers` to pick an ID and note its description. Use `PUT /blockers/{blocker_id}/description` with a different nonempty description: the response reports the new value. Then use `GET /blockers/{blocker_id}`: it still has the original description.

**Expected fix:** Commit the session after updating, refresh the object, and return it. Verify the PUT response and a fresh GET agree, including after restarting the server.

## Intentional bug 2: response contract

**Location:** `frontend/src/api/blockers.ts`, `listBlockers`. The API returns a JSON array, but the client assumes an object containing `items`; the fallback silently shows an empty list.

**Reproduce independently of PATCH:** Seed the database and confirm `GET /blockers` returns records in `/docs`. Start the frontend and observe its empty list. Compare the response payload with the frontend assumption.

**Expected fix:** Request `Blocker[]` and return the array (or consistently change both sides of the contract). Verify seeded and newly created blockers appear after refresh and can be opened.

## Missing feature: PATCH

`update_status` in `backend/app/routes/blockers.py` intentionally returns 501. With the existing `StatusUpdate` model, use `find_blocker(blocker_id, session)`, assign `blocker.status = data.status`, add it to the session, commit, refresh, and return it. The enum validates status and `find_blocker` returns 404. Verify valid status changes via PATCH followed by GET and a server restart, invalid status yields 422, a valid update to a nonexistent ID yields 404, and the UI shows the updated status after the list bug is fixed.

## Starter verification

Follow README setup. Check `/docs`, seeded GET, single GET and 404, POST with default `open` and invalid data rejection. Reproduce both bugs as above and confirm PATCH returns 501 for a valid request. The create form leads directly to the created blocker's details, which allows the status interface to be exercised even before the list bug is fixed. Test the mobile frontend on an emulator or physical device with a reachable API address.

## Follow-up questions

- How did you isolate whether the persistence problem was in the API, ORM, or database?
- How would you prevent response-contract drift?
- What tests would cover a transaction and a failed status validation?
- What tradeoffs matter when moving beyond SQLite?
- How would you secure status changes and deliver notifications reliably?

## Grading rubric

| Category | Points |
|---|---:|
| System architecture understanding | 30 |
| Debugging | 25 |
| Implementation | 20 |
| Learning ability | 15 |
| Communication and documentation | 10 |
| **Total** | **100** |

Assess correctness and reasoning, quality of investigation and verification, ability to learn and explain unfamiliar tools, and clarity of the submitted documentation.
