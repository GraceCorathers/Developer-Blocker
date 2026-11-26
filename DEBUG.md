# Debugging Notes

## Bug 1: Empty blocker list

The frontend showed “No blockers found,” but GET /blockers returned three records. I compared the API response with listBlockers and found that the frontend expected an items property instead of the array the backend returned.

I changed listBlockers in frontend/src/api/blockers.ts to read the array directly. After refreshing, all three blockers appeared.

## Bug 2: Description edits weren’t saving

The description update returned 200 with the new text, but a separate GET still showed the original description. I checked update_description and found that it added the change to the session without committing it.

I added session.commit() to save the change and session.refresh(blocker) to reload the saved record. I tested the update again, then confirmed a separate GET returned “Updated description test.”