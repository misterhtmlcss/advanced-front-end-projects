/* Game HTML Elements */
const start = getClick('start'),
      reset = getClick('reset'),
      counter = getClick('counter'),
      help = getClick('help'),
      keys = getClick('keys-list'),
      audio = document.querySelectorAll('audio');

/* Game JS Variables */
const colorPairs = {
  'blue-key': 0,
  'red-key': 1,
  'green-key': 2,
  'yellow-key': 3
}
const maxGameLevel = 20;
let gameLevel = 0;
let gameStrict = false;  // We use this to change the game from Strict to normal
let gameOn = false;
// Read up on what is Strict and what is not strict.
let gameSequence = [];
let userSequence = [];
let keyPressed;

/* Game JS Functions */
// Initialization of Game function
function initGame (){ //Simon Says Keys aren't show until StartButton is Clicked
  if(gameOn === false) {
    gameOn = true;
    console.log('gameOn', gameOn);
    start.textContent = 'Reset'
    makeClickableKeys()
    createGameSequence();
  } else if(gameLevel < 20 && gameOn !== false) { // User reset game
      endThenReset()
      console.log('This game is being reset', 'gameOn', gameOn)
  } else {
      console.log('testing Init game')
  }
}
function playGame() {
  if(gameLevel > 0){
    if(gameLevel <= 5){
      console.log("level 3 or less", gameLevel)
    }
    if (gameLevel > 5 && gameLevel < 9){
      console.log('gameLevel 5 to 8', gameLevel)
    }
    if(gameLevel > 20) {
      console.log('Too much stuff')
    }
  }
  gameLevel++
}

/*
  pseudo code:
  When the userSequence reaches the length equal to the gameLevel,
  then initiate a beep to start a new round.
  New round iterates through a spliced version of gameSequence until
  it is completed the full pattern until the userSequence.length + 1.
  Then it invites the user ${your turn?} to mirror the gameSequence
  to the correct length.
*/
function toStartNewLevel() {
  userSequence = []; //Each new level restarts the users input
}

/*
Thinking about using Filter and/or slice during user Audit of selections.
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);  slice is non-mutable use on gameSequence
*/
function toCheckArr(userInput, key) {
  console.log('userInput: ', userInput)  // testing inbound results
  soundPlayer(document.querySelector(`audio[data-key="${key}"]`))
  if(userInput){
    for(let i = 0; i <= gameLevel; i++){
      if(gameStrict === false){
        if (userInput[i] === gameSequence[i]){
          toStartNewLevel() // Kick off another level with beeps et al if correct
        } else {
          /*
          Play audio (negative sound)
          clear userSequence and change user-level to show 'Want to try again?'
          User should have to either interact by clicking a button to try again
          or computer can allow them to try again. */
        }
      }
    }
  }
}

// Simon Interactive Keys Listener
keys.addEventListener('click', e => {
  if (e.target.className === 'keys') {
    keyPressed = getDataId(e) // Actual Number ID for keyPressed
    userSequence.push(keyPressed); // Unified approaches around Data-key
    userInput(keyPressed, userSequence)
  }
});

/* Utilities */
// Manage user input
function userInput (keyNumId, userArray) {
  toggleClass(keyNumId);
  toCheckArr(userArray, keyNumId)
}

// Adds class and removes class. Needs a element data-key and the class to work
function toggleClass (id) {
  const keyHTML = document.querySelector(`[data-key="${id}"]`)
  keyHTML.classList.toggle('playing')
  setTimeout(() => {
    keyHTML.classList.toggle('playing')
  }, 300);
}
// Function hide keys until StartButton pressed
function makeClickableKeys () {
  const keys = document.querySelector(`#keys-list`)
  keys.classList.remove('disable')
  counter.classList.remove('disable')
}

// Reset Game
function endThenReset() {
  //if(gameOn === false){
    gameLevel = 0;
    counter.textContent = `Level: 10`;
    help.textContent = 'WTF'
    userSequence = []; //Resetting user Sequence
    soundPlayer(document.querySelector(`audio[data-key="6"]`), 1500)
  //}
}

// Play audio when there are game interactions
function soundPlayer(keySoundId, timeOut){
  if(timeOut === undefined){
    timeOut = 2000;
  }
  keySoundId.currentTime = 0; // Will rewind sound for multiple clicks
  keySoundId.play();
  setTimeout(() => {
    keySoundId.pause();
  }, timeOut);
}


// Creates random number array for Game
function createGameSequence() {
  let i=0
  let currentNum;
  while(i < maxGameLevel){
    currentNum = getRandomKey()
    gameSequence.push(currentNum)
    i++
  }
  if (gameOn === true){
      if(gameSequence.length === 20){
        help.textContent = `Game on!!`;
        setTimeout(() => {
          help.style.display = 'none';
        }, 2000);

        playGame()
      }
  }
}


// Gets Data-Key for HTML element access
function getDataId (e){
  return Number(e.target.dataset.key);
}

// Random number generator between 1-4
function getRandomKey() {
  return Math.floor(Math.random() * 4);
};

// getElementId
function getClick(id) {
  return document.getElementById(id);
}

// StartButton and ResetButton Listners
// Just a prototype trying to make sounds from events
start.addEventListener('click', initGame)
// Strict Button: Needs function
//strict.addEventListener('click', endThenReset)