11/21/2022 9:30 (ish)
Got scaffolding up, that was pretty simple.
When adding the PostList.jsx file, I get an error "Error: Aborted because ./components/PostList.js is not accepted"
Strange ... I need to look into this.
Seems to have something to do with Hot Module Replacement in Next.js, guess I need to do some research ...
Turns out I just forgot to do the return in my component (facepalm)
