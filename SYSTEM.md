# System Design Questions

## 1. What could struggle with more users?

If a lot of people used the app at once, SQLite could have trouble keeping up because only one person’s changes can be saved at a time. We could switch to PostgreSQL, which handles more users better. We could also load blockers in smaller groups instead of loading all of them at once.

## 2. What permissions would the app need?

I would add a login system so only people on the team could access their blockers. Developers could update their own blockers, while project managers could manage the whole team’s. The backend would check these permissions before allowing changes.

## 3. What happens if something goes down?

If the backend goes down, users won’t be able to load or update blockers. I would add backups so we don’t lose saved data and monitoring so we know when something stops working. The frontend should show a clear error and let users try again without losing what they typed.

## 4. What could make the app load slowly?

A slow connection, too many blockers loading at once, or a busy server could make the app slow. I would check how long the requests take and look at the backend logs to figure out the cause. Then we could make changes like loading fewer blockers at a time or improving how the database finds records.

## 5. What feature would you add, and how would you split the work?

I would add a discussion section to each blocker where developers and project managers could leave comments and respond back and forth. Users could also attach code or screenshots and mark the exact line or area where something is wrong, similar to adding notes on a PDF.

One developer could build the comments and annotation tools in the frontend, while another handles saving comments, attachments, and notes in the backend. We would agree on how the data is sent and saved before starting, then test everything together.

I would also improve the frontend UX with a clearer layout, easier navigation, and more noticeable status labels so blockers are easier to follow.