# tic-tac-toe


### Learning Goals:
- Solidify and demonstrate your understanding of:
  - DRY JavaScript
  - event delegation to handle similar event listeners
- Understand the difference between the data model and how the data is displayed on the DOM
- Iterate through/filter DOM elements using for loops
- Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge


### Abstract:
A game as old as time. Challenge a friend to play you at tic-tac-toe to see who the ultimate TTT champion really is. Keep track of who's turn it is and how many wins each player has. After each draw or win, the game resets to have the player who didn't start the last game, start the next game. 


### Installation Instructions:
- Fork the repository found here: https://github.com/RyanBaer42/IdeaBox 
- Clone down your new, forked repo. While cloning, name it what you want your project to be named, and run `git clone`. 
- cd into the repository
- Run `open index.html` in your text editor

### Preview of App:

![ezgif-3-4530350142](https://user-images.githubusercontent.com/113728354/201991495-68ce0c93-4e46-416e-a15d-7dbb860b1b7e.gif)

### Context:
I worked on this project over the course of 7 days. I am in my 6th week in my first module in Turing.


### Contributors:
- [Ryan Baer (he/him)](https://www.linkedin.com/in/ryan-baer-33311114a/)


### Wins + Challenges:
Some challenges included: 
- Using class to class interaction to properly update game grids with the correct player icon. 
- Creating attributes to detirmine if a game has ben won and swap from player to player based off of who started the game previously. 

Some wins included:
- I wrote DRY conditionals to detimine if a player had in-fact won the game. There is little to no redundancies in my game.js file.
- Reassigned game.js attributes that were initially purposed for only one thing to help fix bugs that occured when a game had won but players continued to click the game's spaces
