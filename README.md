# StarTrek_TNG_Trivia_Game
### A trivia game for lovers of Star Trek: The Next Generation (TNG). Engage!

## Project Preview
![Screenshot of project]
('images/Project1 ScreenShot.png')

## URL
My game can be found at this [link](https://esin87.github.io/StarTrek_TNG_Trivia_Game/).

## About This Game
Lovers of Star Trek are in good company. Self-professed fans include Barack Obama, Rihanna, and Tom Hanks. This is a trivia game consisting of ten TNG-based questions, and was built using HTML, CSS and JavaScript. Star Trek: TNG is my favorite series in the Star Trek franchise, and for my first independent, from-scratch project in the General Assembly: Software-Engineering Immersive Course, I decided to indulge my love of all things Trek by building this game. The questions were written by me. I do not own any of the rights to Star Trek. 

## Technologies Used
The technologies used here are HTML5, CSS and JavaScript. The code was passed through the HTML5 Validator and CSS validator and passed both tests.

## Installation Instructions
Please download the folder titled TNG_Trivia, which contains an images folder and fonts folder, as well as the index.html, styles.css, and script.js files that contain all of my code. Then open the index.html file in a browser (preferably Google Chrome) to play the game. 

## User Stories
The home page of my game contains an "about" module, giving the user instructions and defining the objectives. My user will be able to click an "Engage!" button that will begin the game. The user will answer ten multiple choice questions about Star Trek: TNG, and accumulate points for correct answers. They will see their score progress and be given their final score at the end. The user will be able to reset the game to play the game. 

## Wireframes
My wireframe drawings are at this [link](https://github.com/esin87/StarTrek_TNG_Trivia_Game/blob/master/Star%20Trek%20Trivia%20Game%20Wireframes.pdf).

## Problems
Initially I wrote the game logic using alerts to give the user answer feedback. When I switched over to an overlay div with answer feedback, it was tricky to get the game logic to work with the updated method of feedback. I ran into a bug that would start skipping questions after the first two questions. Though I fixed that, I then had an issue where the question would switch before the user clicked out of the answer feedback overlay. To solve these issues and have the game progress the way I wanted to, I ended up mostly re-writing the Javascript with my new answer feedback, and found success by starting the game logic over. In the future, I would flesh out HTML and CSS first, then add in the game logic in JS.

## Future Additions
Some future additions that I would like to implement: A timer that gives the user more points for answering questions sooner. A score card that gives the user their level of Trekkieness at the end. A larger pool of questions that are then randomly assigned each time a user plays the game, so that users can play the game multiple times and save their progress.
