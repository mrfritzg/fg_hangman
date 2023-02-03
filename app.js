// HANDMAN PROJECT

/******************
****  CLASSES  ****
*******************/
// create the Word class that will create & hold the word
class Word {
    constructor(wordItem, hint) {
        this.wordItem = wordItem;
        this.hint = hint || '';
    }
}

//put the words into an array of Objects
const WordArray = [];
const Word1 = new Word('video', 'type of media');
WordArray.push(Word1);

const Word2 = new Word('sister', 'family member');
WordArray.push(Word2);

const Word3 = new Word('queen', 'royalty title');
WordArray.push(Word3);

const Word4 = new Word('diamond', 'precious gem');
WordArray.push(Word4);

const Word5 = new Word('president', 'leader of a country');
WordArray.push(Word5);

const Word6 = new Word('airplane', 'transportation vehicle');
WordArray.push(Word6);

const Word7 = new Word('supermarket', 'type of grocery store');
WordArray.push(Word7);

const Word8 = new Word('lion', 'sleeps in the jungle');
WordArray.push(Word8);

const Word9 = new Word('teacher', 'works at a school');
WordArray.push(Word9);

const Word10 = new Word('television', 'type of media');
WordArray.push(Word10);

const Word11 = new Word('courage', 'The cowardly lion needed this');
WordArray.push(Word11);

const Word12 = new Word('Triceratops', 'Dinosaur with three horns');
WordArray.push(Word12);

const Word13 = new Word('Pacific', 'the largest ocean');
WordArray.push(Word13);

const Word14 = new Word('elephant', 'the largest land mammal');
WordArray.push(Word14);

const Word15 = new Word('whale', 'the largest sea animal');
WordArray.push(Word15);

// console.log(WordArray);

class Player {
    constructor(name) {
        this.name = name || 'Player1'
        this.points = 0;
    }

}

/******************
**** VARIABLES ****
*******************/
//Display Player names on game page
const Player1 = new Player('Jeff');
const Player2 = new Player('Stan');

//holds the name of the current player & set it to Player1.name
let currentPlayer = Player1.name //Player2.name
let playerNameEl = document.getElementById('playerName');
playerNameEl.innerText = currentPlayer
console.log(currentPlayer);

// randomly select a word
// const currentWord =  WordArray[Math.floor(Math.random() * WordArray.length )];
let currentWord;//=  WordArray[Math.floor(Math.random() * WordArray.length )];

// holds the value of the current word
let currentWordName;// = currentWord.wordItem

// holds the value of the current word hint from the WordArray
let currentWordHint;//= currentWord.hint
let wordHintEl;// = document.getElementById('wordHint');
// wordHintEl.innerText = currentWordHint;

// console.log(currentWordName, currentWordHint);

//boolean that shows the current state of the guess 
let currentGuess = true;

//Guess results for the webpage
let guessResultsEL = document.getElementById("guessResults");

//boolean that shows if the Game is still running
let gameOn;// = true;

//keep track of the correct guesses in an array
//only increment this counter when the correct guess is found
let correctGuessCounter = 0;

//variable that keeps track of the game status
let gameStatusEl = document.getElementById('gameStatus');

// create an current Alphabet array, where you can easily change words to alphabets 
// of different languages
const engAlphabet = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M'
]

// ['A','B','C','D','E','F','G','H','I','J','K','L','M',
// 'N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

//put the PARENT DIV for the buttonLetters in a variable
let buttonLetters = document.querySelector('.buttonLetters');

//put the Parent UL for the puzzle in a variable
let puzzleWordDivEl = document.querySelector('.puzzleWord');

//put the reset button in a variable
let resetGameBtnEL = document.getElementById("resetGame");

/***********************
**** EVENT LISTENER ****
************************/
//addEventListener to partentDiv for choosing a letter for each button, it will call 
// guessLetter function
buttonLetters.addEventListener('click', e => {
    //  console.dir(e.target);
    //if a button has been selected, then proceed w/next steps
    if (e.target.localName === 'button') {
        //call pickeLetter function
        // pass in letter value into the function
        // console.log(e.target.value)
        guessLetter(e.target.value);

    }
});

//ADD addEventListener for reset game button
resetGameBtnEL.addEventListener('click', playHangMan);


/******************
**** FUNCTIONS ****
*******************/

//method that changes to the next Player based on who is the current Player
function changePlayer() {
    if (!currentGuess && currentPlayer === Player1.name) {
        currentPlayer = Player2.name;
        playerNameEl.innerText = currentPlayer
    } else if (!currentGuess && currentPlayer === Player2.name) {
        currentPlayer = Player1.name;
        playerNameEl.innerText = currentPlayer
    }
}

//create the the buttons of the letters by looping thru the on 
// the current Alphabet array  
function createAlphabetButtons(arr) {
    //put the relevant class, ID, value for each button and append it to parent DIV
    arr.forEach((letter) => {
        if (letter === 'A' || letter === 'Z' )  {
            buttonLetters.innerHTML += "<br>"
        }
        let buttonEl = document.createElement("BUTTON");
        buttonEl.classList.add("letter");
        buttonEl.id = "letter-" + letter;
        buttonEl.value = letter;
        buttonEl.innerText = letter;
        buttonLetters.appendChild(buttonEl);
    });
    // console.log(buttonLetters)
}

// createAlphabetButtons(engAlphabet);

// create the Puzzle word on the screen by using appendChild to make divs with 
// bold borders to hold each letter word strings
// it will take 
function createPuzzleWord(word) {
    // take the currentWord and make a DIV for each one 
    // give each div a id of position-id, i.e. position-0, to identify each position where the letter
    // should be for matching later
    for (let i = 0; i < word.length; i++) {
        let puzzleWordLiLetterEl = document.createElement("li");
        puzzleWordLiLetterEl.id = "position-" + i;
        puzzleWordLiLetterEl.classList.add("puzzleWordLetter");
        puzzleWordDivEl.appendChild(puzzleWordLiLetterEl)
    };
}

// createPuzzleWord(currentWordName);

// the click listener will call the guessLetter function which will
// check if the targeted letter is in the currentWordName string the div for the
// appropiate letter or it will say -- that letter is wrong
// if the letter is there , it will place it in the correct div location
function guessLetter(letter) {
    // check if the letter is available
    if (currentWordName.toLowerCase().indexOf(letter.toLowerCase()) >= 0) {

        //loop thru the word and set the innerText for each matching letter
        for (let i = 0; i < currentWordName.length; i++) {
            if (currentWordName[i].toLowerCase() === letter.toLowerCase()) {
                //console.log(currentWord[i], letter);

                //set the blank space to the guessed letter  
                document.getElementById("position-" + i).innerText = letter;

                // Let the user know on the webpage
                guessResultsEL.innerText = "Good Guess";

                //only increment this counter when the correct guess is found
                correctGuessCounter += 1;
                console.log(correctGuessCounter);

                //disable the button for the letter after it has been correctly guessed
                //which will prevent the button from being pressed multiple times
                document.getElementById("letter-" + letter).disabled = true;

                //check if the puzzle has been solved
                isThePuzzleSolved();
            }
        }
    } else { //the letter isn't there
        // Let the user know on the webpage
        guessResultsEL.innerText = 'Bad Guess!';

        //disable the button for the letter after it has been correctly guessed
        //which will prevent the button from being pressed multiple times
        document.getElementById("letter-" + letter).disabled = true;

        //set the Guess Flag to false
        currentGuess = false;

        //change Player
        changePlayer();
    }
}

// the isThePuzzleSolved function will check if the puzzle has been solved
function isThePuzzleSolved() {
    //check if the correctGuess counter equals to number of letters in the word
    if (correctGuessCounter === currentWordName.length) {
        gameStatusEl.innerText = currentPlayer + ' IS THE WINNER!. Press RESET to start a new Game';

        //blankout the current player and guess status
        playerNameEl.innerText = '';
        guessResultsEL.innerText = '';

        //set GameOn to false
        gameOn = false;

        //disable all the buttons
        const lettersBtns = document.getElementsByClassName('letter');
        for (let btnitems of lettersBtns) {
            btnitems.disabled = true;
        }
        //ADD MORE CODE TO disable the game the page

    }

}

//play functions -- calls all of the functions and sets up website
function playHangMan() {
    //resets the game back to Player1 
    currentPlayer = Player1.name
    playerNameEl.innerText = currentPlayer;

    //remove all childNodes from alphabet buttons if they previously created
    while (buttonLetters.hasChildNodes()) {
        buttonLetters.removeChild(buttonLetters.firstChild);
    }

    //remove all childNodes from puzzle words if they previously created
    while (puzzleWordDivEl.hasChildNodes()) {
        puzzleWordDivEl.removeChild(puzzleWordDivEl.firstChild);
    }

    // randomly select a word
    currentWord = WordArray[Math.floor(Math.random() * WordArray.length)];

    // holds the value of the current word
    currentWordName = currentWord.wordItem;

    //holds the value of the current word hint from the WordArray
    currentWordHint = currentWord.hint
    wordHintEl = document.getElementById('wordHint');
    wordHintEl.innerText = currentWordHint;
    console.log(currentWordName, currentWordHint);

    //boolean that shows if the Game is still running
    gameOn = true;

    //keep track of the correct guesses in an array
    //only increment this counter when the correct guess is found
    correctGuessCounter = 0;

    //run the function to create the alphabet buttons
    createAlphabetButtons(engAlphabet);

    //run the function to create the puzzle
    createPuzzleWord(currentWordName);
}

//CALLING THIS FUNCTION STARTS THE GAME
playHangMan();