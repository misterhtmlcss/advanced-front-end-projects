/* Game HTML Elements */
const start = getClick('start'),
      reset = getClick('reset'),
      counter = getClick('counter'),
      help = getClick('help'),
      keys = getClick('keys-list'),
      audio = document.querySelectorAll('audio');


/* Game JS Variables */
const colorPairs = { //Key colours
  'blue-key': 0,
  'red-key': 1,
  'green-key': 2,
  'yellow-key': 3
}
const maxGameLevel = 20;
let gameLevel = 0; // Game 'rounds' if that helps
let gameStrict = false;  // We use this to change the game from Strict to normal
let gameOn = false;

// Read up on what is Strict and what is not strict.
let gameSequence = []; //Computer fills this on 'startBtn'
let userSequence = []; // User fills this as he goes
let keyPressed;

/* Game JS Functions */
// Initialization of Game function
function initGame (){
  //Simon Says Keys aren't show until StartButton is Clicked
  if(gameOn === false) {
    gameOn = true;
    start.textContent = 'Reset'
    makeClickableKeys()
    createGameSequence();
  } else if(gameLevel < 20 && gameOn !== false) {
    // User reset game
    endThenReset()
  } else {
    console.log(gameLevel, gameOn , 'testing Init game')
  }
}

// Simon Interactive Keys Listener
keys.addEventListener('click', keysPressed)



/* keys.addEventListener('click', e => {
  if (e.target.className === 'keys') {
    keyPressed = getDataId(e) // Actual Number ID for keyPressed
    userSequence.push(keyPressed); // Unified approaches around Data-key
    userInput(keyPressed, userSequence)
    //console.log(gameSequence);
  }
}); */

// StartButton and ResetButton Listners
// Just a prototype trying to make sounds from events
start.addEventListener('click', initGame)
// Strict Button: Needs function
//strict.addEventListener('click', endThenReset)