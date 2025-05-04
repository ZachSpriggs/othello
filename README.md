# Instructions #
git clone 
cd othello
npm install
npm start

Title: Othello game 

Author: Zach Spriggs

Date: 5/4/2025

Tools Used: React, TS, Redux, Eslint, Nx, Vite, Tailwind

AI Assistance: 
- I used the tech stack at Gain Life to create this game. I have never used Nx before, so I utilized 
ChatGPT to help me understand the structure of an Nx repo, as well as using it to help me scaffold 
the codebase. 
- I had to do some debugging on getting everything functioning which I also used
ChatGPT for.
- I'm also quite beginner with using Tailwind but I figured it would speed up my development since I 
didn't need a ton of styling, so I had ChatGPT help me with a couple of class names. These included 
some of the styles on the tile, as well as assisting in styling the winning modal.
- I have experience with Redux but it has been awhile so I used ChatGPT to assist with a small portion
of the logic here.

Core-Functionality:
- I took quite a bit of time trying to understand the rules of Othello as I've never played
it before. Some versions I found online had move highlighting while others didn't. 
I love playing Chess on the Chess app, and normally I turn off move highlighting, 
but I thought it would be a good piece of functionality to have here so I put it in.
- The functionality around long flanks took some time to implement. At first my logic
was only flipping the disc that was closest to my recently placed disc. Once I got that 
ironed out I was able to move to all discs between valid discs.

Wants:
- The number one thing I would have wanted to implement was testing. I would have added 
unit tests with Jest, as well as E2E testing with Cypress. I felt as though this would 
have added additional time and be a distraction from the actual challenge so I did not implement. 
I would mainly be focused on testing the board, valid moves, applying the moves, checking the scoreboard,
and verifying the game over functionality. 
- I would have liked to add an AI opponent, so I set up all of the game logic in the game-core directory.
You could import those into a AI opponent directory and have it select a random move as long as the move is 
in the valid moves.
- Allow a player to select a new board size. I have this somewhat extensible right now in my setup, however
I would need to add a dropdown on the UI to allow a user to select the grid size. 6x6, 10x10, 12x12 etc.
From there, I would need to update redux with the functionality to set the board size.

