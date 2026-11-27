# My Reflection

## 1. What was the most unfamiliar technology?

SQLModel was the newest part for me. I’ve worked with Python before, but connecting Python objects to database tables was different, it was pretty easy to understand though.

## 2. What was the hardest issue to debug?

The description update was hardest because it looked like it worked but it didn't. The API returned 200 and showed the new description, but when I requested the blocker again, the original text was still there. Comparing those responses helped me find the missing commit and I was able to debug it. It taught me to check that a change was actually saved in the backend instead of relying on a successful respons in the front.

## 3. How did you approach learning the unfamiliar technology?

I started by getting the app running locally and making sure I had the right verion of Python and neccesssary packages installed. Then, I created a test blocker and followed it through the form from the API to SQLite.

I used AI to walk through the files and explain unfamiliar code, then tested the behavior myself in the terminl and by opening the app in a local host. I made sure to breaking it into smaller steps as laid out as Tasks in the Assessment.MD and that made it easier to follow what I was doing.

## 4. What would you improve about the architecture?

I would start with making the user accounts and team permissions better so the app is more accesible. I would also improve the frontend layout and navigation to make the app easier to use. I’d like to add a discussion section where developers can reply to each other and mark up code or screenshots to show exactly where they’re stuck.