// HANDMAN PROJECT


// create the Word class that will create & hold the word
class Word {
    constructor( wordItem, hint) {
    this.wordItem = wordItem ;
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

const Word8 = new Word('courage', 'sleeps in the jungle');
WordArray.push(Word8);

const Word9 = new Word('teacher', 'works at a school');
WordArray.push(Word9);

const Word10 = new Word('television', 'type of media');
WordArray.push(Word10);

// console.log(WordArray);

class Player {
    constructor(name) {
        this.name = name  || 'Player1'
        this.points = 0;
    }
   
}

//Display Player names on game page
const Player1 = new Player('Jeff');
const Player2 = new Player('Stan');

//holds the name of the current player & set it to Player1.name
let currentPlayer = Player1.name //Player2.name
document.getElementById('playerName').innerText = currentPlayer
console.log(currentPlayer);

// randomly select a word
const currentWord =  WordArray[Math.floor(Math.random() * WordArray.length )];

// holds the value of the current word from the WordArray
let currentWordName = currentWord.wordItem

//holds the value of the current word from the WordArray
let currentWordHint = currentWord.hint
document.getElementById('wordHint').innerText = currentWordHint;

console.log(currentWordName, currentWordHint);

//boolean that shows the current state of the guess 
let currentGuess = true;

//

//method that changes to the next Player based on who is the current Player
function changePlayer() {
    if(!currentGuess && currentPlayer === Player1.name) {
        currentPlayer = Player2.name;
        document.getElementById('playerName').innerText = currentPlayer
    } else if (!currentGuess && currentPlayer === Player2.name) {
        currentPlayer = Player1.name;
        document.getElementById('playerName').innerText = currentPlayer
    }
}

// create an current Alphabet array, where you can easily change words to alphabets 
// of different languages
const engAlphabet = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M',
'N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

//put the DIV for the buttonLetters in a variable
let buttonLetters = document.querySelector('.buttonLetters');

//create the the buttons of the letters by looping thru the on 
// the current Alphabet array  
function createAlphabetButtons (arr) {    
    //put the relevant class, ID, value for each button and append it to parent DIV
    arr.forEach( (letter) => {
        let buttonEl = document.createElement("BUTTON");
        buttonEl.classList.add("letter");
        buttonEl.id = "letter-"+letter;
        buttonEl.setAttribute("value",letter);
        buttonEl.innerText = letter;
        buttonLetters.appendChild(buttonEl);
    });
    // console.log(buttonLetters)
}

createAlphabetButtons(engAlphabet);

// create the Puzzle word on the screen by using appendChild to make divs with 
// bold borders to hold each letter word strings
// it will take 
function createPuzzleWord() {
    // take the currentWord and make a DIV for each one 
    // give each div a id of position-id, i.e. position-0, to identify each position where the letter
    // should be for matching later
    let puzzleWordDivEl = document.querySelector('.puzzleWord');
    for(let i = 0; i<currentWordName.length; i++){
        let puzzleWordLiLetterEl = document.createElement("li");
        puzzleWordLiLetterEl.id = "position-"+i;
        puzzleWordLiLetterEl.classList.add("puzzleWordLetter");
        puzzleWordDivEl.appendChild(puzzleWordLiLetterEl)
    };    
}

createPuzzleWord();
//addEventListener to partentDiv for choosing a letter for each button, it will call 
// guessLetter function
buttonLetters.addEventListener('click', e => {
// console.dir(e.target);
//if a button has been selected, then proceed w/next steps
if (e.target.localName === 'button') {
    //call pickeLetter function
    // pass in letter value into the function
    // console.log(e.target.value)
    guessLetter(e.target.value);
}
});

//Notes
// the click listener will call the pickLetter function which will
// check if the targeted letter is in the currentWordName the div for the
// appropiate letter or it will say -- that letter is wrong
// if the letter is there , it will place it in the correct div location

function guessLetter(letter) {
    // check if the letter is available
        if (currentWordName.toLowerCase().indexOf(letter.toLowerCase()) >= 0 ) {  
            //loop thru the word and set the innerText for each matching letter
            for(let i=0; i<currentWordName.length; i++) {
                if(currentWordName[i].toLowerCase() === letter.toLowerCase()) {
                //console.log(currentWord[i], letter);
                  document.getElementById("position-"+i).innerText = letter;  
                  // Let the user know on the webpage
                  document.getElementById("guessResults").innerText = "Good Guess";
                }
            }
        } else { //the letter isn't there
            // Let the user know on the webpage
            document.getElementById("guessResults").innerText ='That letter is wrong';
            //set the Guess Flag to false
            currentGuess = false;
            //change Player
            changePlayer();
        }
}