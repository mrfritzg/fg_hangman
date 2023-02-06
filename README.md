# HANGMAN Web App Project by Fritz Guerilus
This is a MVP - Minimum Viable Product for my DOM project
It is a web app game for Hangman
It is built with HTML, CSS and Vanilla JavaScript .

# GamePlay:
This is a 2 player game, & uses the default names of Jeff & Stan. Future versions of the game will allow visitors to enter their own names

Each player has a chance to guess a letter for the missing Puzzle word.
There is a hint to help. A round consist of a player correctly guessing all of the missing letters. The results of each guess is labeled as "Good" or "Bad".

The round ends when a player either guesses all of the correct letters until the word is found or if they encounters a bad guess. If a player get's Bad guess they lose their turn and the next player gets a turn.

BUT -- There are only 10 bad guesses or Lives allowed. Each bad guess will build a piece of the hangman picture.

The Game ends 2 ways -- 
1 -- A player correctly guesses all of the correct letters and the word. The game will indicate the winner.

2 -- If no one correctly guesses the word before the Hangman Picture is completely drawn & both players lose.

The RESET button can be pressed to reset the game at any time.

# Details
The game consist of 2 Classes, 1 for the Player , 1 for the Puzzle Word. New Objects can be built to add more players & Puzzle Words.

All of the Word Objects are created statically but are stored in an array for easy access. 

The game randomnly picks a word from the array, using the MATH.Random function.

Future versions of the game can include downloading and creating the words from an external source.

The alphabet letters that are used for the game are stored in an array  and can be used for words that use those letters in those languages. The english alphabet is currently being used, and as a result word from several languages can be used such as -- ENGLISH, FRENCH, SPANISH, etc. Future versions of the game can include arrays that have alphabet letters from different/custom languages in order to include different languages/words for the game.

The alphabet letters buttons and the PuzzleWord letters boxes are built dynamically via JS & DOM coding, & are not hardcoded. Various CSS Styles are added/removed to add additional visual effects. Flexbox has been added to make the web app responsive.

A playHangMan function is executed setup & start the game by initializing/reseting several variables with default values and calling subfunctions to carry out their respective actions.

There are eventlisteners for the alphabet letters buttons & RESET buttons to execute their respective functions. 

The RESET button doesn't simply reload the web page. It calls playHangMan function which resets several variables with default values which starts the game from scratch including randomnly choosing a new word.