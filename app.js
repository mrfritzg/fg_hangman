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
console.log(currentPlayer);
//holds the value of the current word from the WordArray
let currentWord = WordArray[Math.floor(Math.random() * WordArray.length )].wordItem
//holds the value of the current word from the WordArray
let currentWordHint = WordArray[Math.floor(Math.random() * WordArray.length )].hint

// console.log(currentWord, currentWordHint);

//boolean that shows the current state of the guess 
let currentGuess = true;

//method that changes to the next Player based on who is the current Player
function changePlayer() {
    if(!currentGuess && currentPlayer === Player1.name) {
        currentPlayer = Player2.name;
    } else if (!currentGuess && currentPlayer === Player2.name) {
        currentPlayer = Player1.name;
    }
}

currentGuess = false;
changePlayer();
console.log(currentPlayer);

// create an current Alphabet array, where you can easily change words to alphabets 
// of different languages
const engAlphabet = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m',
'n','o','p','q','r','s','t','u','v','w','x','y','z',]

//create the the buttons of the letters by looping thru the on 
// the current Alphabet array  
function createAlphabetButtons (arr) {
    //put the DIV for the buttonLetters in a variable
    let buttonLetters = document.getElementsByClassName('buttonLetters');
    arr.forEach( (letter) => {
        let buttonEl = document.createElement("BUTTON");
        buttonEl.classList.add("letter-"+letter);
        buttonEl.setAttribute("value",letter);
        buttonEl.innerText = letter;
        buttonLetters.appendChild(buttonEl);
    });
}

createAlphabetButtons(engAlphabet);

// create the word on the screen by using appendChild to make Li's with 
// bold borders to hold each letter word strings

//addEventListener for choosing a letter, it will call 
// pickLetter function





//Notes
// the click listener will call the pickLetter function which will
// check if the targeted letter is in the currentWordto the div for the
// appropiate letter or it will say -- that letter is wrong
// if the letter is there , it will place it in the correct div location

function pickLetter(letter) {
    // check if the letter is available
        if (currentWord.indexOf(letter) > 0 ) {  
        return letter;
        //later set the Letter's index to it's position in the div based on class
        } else {
            //change the div or span to say wrong letter on website
            //but for now put a console.log message to test functionality
            console.log ('That letter is wrong');
        }
}



