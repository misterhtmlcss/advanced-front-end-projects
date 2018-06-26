// Game Variables
const colorPairs = {
  'blue-key': 0,
  'red-key': 1,
  'green-key': 2,
  'yellow-key': 3
}
const maxGameLevel = 20;
let gameLevel = 0;
let gameSequence = [];
let userSequence = [];

// Game Elements
const start = getClick('start'),
      reset = getClick('reset'),
      counter = getClick('counter'),
      keys = getClick('keys-list'),
      audio = document.querySelectorAll('audio');

// Load Game: IIFE runs to create gameSequence Array for game onload
(function () {
  createGameSequence();
  loadGame();
})();

function loadGame() {

}





// Needs a lot of work still!!
// This made no sense to me, so I tore it up. SOrry!
function playGame() {
  console.log('firstseq', gameSequence[gameLevel]);
  console.log('level', gameLevel);
  for (let i = 0; i <= gameLevel; i++) {
    document.querySelector(`audio[data-key="${gameSequence[i] + 1}"]`).play();
    gameLevel++;
  }
  // document.querySelector(`audio[data-key="${gameSequence[gameLevel] + 1}"]`).play()
  // console.log('firstseqsound', document.querySelector(`audio[data-key="${gameSequence[gameLevel] + 1}"]`));
}

function toStartNewLevel() {

}

function toCheckArr() {
  if (userSequence == gameSequence) {
    // Do something
  } else {
    // Do something else
  }
}

function appendPlaying() {

}
function endThenReset() {
  gameLevel = 0;
  counter.innerHTML = `Level: ${gameLevel + 12}`;
  // innerHTML (ABOVE): For Resetting ONLY, already defaults as =1
  userSequence = []; //Resetting user Sequence

}

// Simon Interactive Keys Listener
keys.addEventListener('click', e => {
  const key = document.querySelector(`[data-key="${getDataId(e)}"]`)
  // Prevent the listener from registering keys inside the parent but not inside the keys themselves
  if (e.target.className === 'keys') {
    userSequence.push(colorPairs[getDataId(e)]); // Unified approaches around Data-key
    toggleClass(key, 'playing');
    playAudio(e);
  }
});

// StartButton and ResetButton Listners
// Just a prototype trying to make sounds from events
start.addEventListener('click', playGame);
// Reset works
reset.addEventListener('click', endThenReset)

// Utilities
// Adds class and removes class. Needs a element data-key and the class to work
function toggleClass (id, elClass) {
  id.classList.toggle(elClass)
  setTimeout(() => {
    id.classList.toggle(elClass)
  }, 300);
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
