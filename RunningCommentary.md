11/21/2022 9:30 (ish)
- Got scaffolding up, that was pretty simple.
- When adding the PostList.jsx file, I get an error "Error: Aborted because ./components/PostList.js is not accepted"
- Strange ... I need to look into this.
- Seems to have something to do with Hot Module Replacement in Next.js, guess I need to do some research ...
- Turns out I just forgot to do the return in my component (facepalm)
- Got the basic components created fro PostList, Post and Comment ... they look terrible right now.
- Created the Input Component. Making sure it can click the button.
- Just realized I forgot to include localization logic. Making a conscious choice to NOT include that sort of logic, because it's not needed for a sample project, and would come from sources specific to each company and/or project.
- Time to add in Recoiljs. And, y'know, learn how to use it. :)
- Huh, Recoil seems to be designed for speed. Cool!
- Oh, that cleans up the PostList page nicely.
- Little big confusing when it comes to updating ...
- Hrm... the error is back. What's going on? ...
- Had to stop for other activities I have planned for the day.
- Stop Time 11/21/2022 11:30 AM
- Start Time 11/21/2022 12:45 PM
- I wanna see if I can fix this problem in the few minutes I have.
- Aha! Success! Objects are not extensible when receiving them from Atoms in a Selector. Makes sense.
- Pushing up this step.
- Starting on making things look a bit nicer.
- Got modular styles added, starting to look at the figma designs a bit cloesr.
- OK, now I really need to stop for a bit.
- Stop Time 11/21/2022 2:03 PM
- Start Time 11/21/2022 3:52 PM
- As I was asked to finish today, I'll be foregoing more in-depth commentary to go faster.
- Alright, I decided to forego unit tests and putting this up on a server somewhere because I simply am too tired to do so tonight and I was asked to complete it by the end of the day.
- Things I would improve: 1) Find out better best practices for data structures in recoil. 2) Refactor for better modularity. 3) Talk with the person who put this together and tell them to update the Figma designs (when you're logged in) to show the Add Post section. It only shows when you're not logged in for some weird reason. 4) Add in unit tests 5) Actually test the production deploy (too tired) 6) Get design match approval and code review approval.