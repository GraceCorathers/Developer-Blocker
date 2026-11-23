# Developer Blocker Tracking System ? Technical Assessment

You have been given a partially completed full-stack application. Your goal is to understand the architecture, identify and fix existing issues, and implement the missing functionality. You are expected to learn unfamiliar technologies independently. You may use documentation, online resources, and AI assistants. However, you must understand and be able to explain any code you submit.

## Task 1: Understand the System

Run the application locally. Create an architecture diagram illustrating the frontend, backend, REST API, ORM, and database. Explain what happens when a user submits a blocker.

## Task 2: Debug the Application

The application contains two intentional bugs. Identify and resolve both. For each bug, document:

1. The observed behavior.
2. The root cause.
3. How you investigated the issue.
4. The code changes you made.
5. How you verified the solution.

## Task 3: Implement Status Updates

Implement `PATCH /blockers/{id}`. The endpoint should update an existing blocker, reject invalid statuses, return 404 for nonexistent blockers, persist updates in SQLite, and return the updated blocker. Ensure the React Native frontend can successfully update blocker statuses.

## Task 4: System Design Questions

Assume the application grows from 10 users to 10,000 users. Answer:

1. Would you continue using SQLite? Why or why not?
2. How would you implement notifications when blocker statuses change?
3. How would you prevent unauthorized users from modifying blockers?
4. What happens if the backend becomes unavailable?
5. How would you investigate a slow API endpoint?
6. How would you split the notification feature into tasks for three developers?

Implementation of these improvements is not required.

## Task 5: Reflection

Briefly answer:

1. What was the most unfamiliar technology?
2. What was the hardest issue to debug?
3. How did you approach learning the unfamiliar technology?
4. What would you improve about the architecture?

## Deliverables

Submit your completed code, an architecture diagram, a debugging report, answers to the system design questions, and a short reflection.

Estimated completion time: 4?6 hours.
