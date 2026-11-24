# Developer Blocker Tracking System Technical Assessment

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

Following this task, you will be asked system design questions regarding the repo
and the changes you have made. Think about the following before entering the interview.
Is there anything you're fuzzy on?

1. Think about the scalability of the system. What technologies may be compromised if the userbase grows large?
2. Think about the security of the system. If there are many users, what part of the system may need permissions?
3. Think about the potential reliability of the system. Have you heard about Outlook going down? What about AWS?
4. What could be some causes if the website takes a long time to load?
5. Think about potential new features for the website. How could you split up the work load for other developers?

## Task 5: Reflection

Briefly answer:

1. What was the most unfamiliar technology?
2. What was the hardest issue to debug?
3. How did you approach learning the unfamiliar technology?
4. What would you improve about the architecture?

## Deliverables

Submit your completed code, an architecture diagram, a debugging report, answers to the system design questions, and a short reflection.

Estimated completion time: 4-6 hours.
