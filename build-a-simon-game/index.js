/* Game Variables */
const colorPairs = {
  'blue-key': 0,
  'red-key': 1,
  'green-key': 2,
  'yellow-key': 3
}
const maxGameLevel = 20;
let gameLevel = 0;
let gameStrict = false;
let gameSequence = [];
let userSequence = [];

/* Game Elements */
const start = getClick('start'),
      reset = getClick('reset'),
      counter = getClick('counter'),
      keys = getClick('keys-list'),
      audio = document.querySelectorAll('audio');


/* Game Functions */
// Initialization of Game function
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

function toStartNewLevel() {
  /*pseudo code:
  When the userSequence reaches the length equal to the gameLevel,
  then initiate a beep to start a new round.
  New round iterates through a spliced version of gameSequence until it is completed the full pattern until the userSequence.length + 1.
  Then it invites the user ${your turn?} to mirror the gameSequence to the correct length.

  ***** NOTE: BETTER ALTERNATIVE Method *****
  SEE README.md for further notes

}

function toCheckArr() {
  for(let i = 0; i <= gameLevel; i++){
    if(gameStrict === false){
      if (userSequence[i] === gameSequence[i]){
        toStartNewLevel() // Kick off another level with beeps et al if correct
      } else {
        // Play audio (negative sound)
        // clear userSequence and change user-level to show 'Want to try again?'
        // User should have to either interact by clicking a button to try again or computer can allow them to try again.
      }
    }
  }
}

// Simon Interactive Keys Listener
keys.addEventListener('click', e => {
  const key = document.querySelector(`[data-key="${getDataId(e)}"]`)
  // Prevent the listener from registering keys inside the parent but not inside the keys themselves
  if (e.target.className === 'keys') {
    userSequence.push(Number(getDataId(e))); // Unified approaches around Data-key
    toggleClass(key, 'playing');
    playAudio(e);
  }
});


// StartButton and ResetButton Listners
// Just a prototype trying to make sounds from events
start.addEventListener('click', playGame)
// Reset works
reset.addEventListener('click', endThenReset)


/* Utilities */
// Adds class and removes class. Needs a element data-key and the class to work
function toggleClass (id, elClass) {
  id.classList.toggle(elClass)
  setTimeout(() => {
    id.classList.toggle(elClass)
  }, 300);
}

// Reset Game
function endThenReset() {
  gameLevel = 0;
  // innerHTML (Below): For Resetting ONLY, already defaults as =1
  counter.innerHTML = `Level: ${gameLevel + " replace me"}`;
  userSequence = []; //Resetting user Sequence
  //console.log(gameLevel, counter, userSequence)//Tested.All is as it should be here
}

// Play audio when there are game interactions
function playAudio(e) {
  const calledAudio = document.querySelector(`audio[data-key="${getDataId(e)}"]`);
  calledAudio.currentTime = 0; // Will rewind sound for multiple clicks
  calledAudio.play();
}

// Creates random number array for Game
function createGameSequence() {
  let i=0
  let currentNum;
  while(i< maxGameLevel){
    currentNum = getRandomKey()
    gameSequence.push(currentNum)
    i++
  }
}
createGameSequence();

// Gets Data-Key for HTML element access
function getDataId (e){
  return e.target.dataset.key;
}

// Random number generator between 1-4
function getRandomKey() {
  return Math.floor(Math.random() * 4);
};

// getElementId
function getClick(id) {
  return document.getElementById(id);
}
