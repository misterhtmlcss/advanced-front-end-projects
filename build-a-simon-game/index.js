// Game Variables
const maxGameLevel = 20;
let gameLevel = 0;
let gameSequence = [];
let userSequence = [];
const colorPairs = {
  'blue-key': 0,
  'red-key': 1,
  'green-key': 2,
  'yellow-key': 3
}

// Game Event Listeners
const start = getClick('start'),
  reset = getClick('reset'),
  counter = getClick('counter'),
  keys = getClick('keys-list'),
  audio = document.querySelectorAll('audio');


function init() {
  createGameSequence();
  loadGame();
  playGame();
}

function loadGame() {
  gameLevel = 0;
  counter.innerHTML = `Level: ${gameLevel + 1}`;
}

// Needs a lot of work still!!
function playGame() {
  // console.log('firstseq', gameSequence[gameLevel]);
  // console.log('level', gameLevel);
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

}

function playAudio(e) {
  const audioId = e.target.dataset.key;
  const calledAudio = document.querySelector(`audio[data-key="${audioId}"]`);
  calledAudio.currentTime = 0; // Will rewind sound for multiple clicks
  calledAudio.play();
}

// Listeners
keys.addEventListener('click', e => {
  // Prevent the listener from registering keys inside the parent but not inside the keys themselves
  if (e.target.className === 'keys') {
    const key = e.target;
    // Match the color keys with their respective numbers and push to the user array
    userSequence.push(colorPairs[key.id]);
    key.classList.add('playing');
    playAudio(e);
    setTimeout(() => {
      key.classList.remove('playing');
    }, 100);
  }
});


// Just a prototype trying to make sounds from events
start.addEventListener('click', e => {
  init();
  //appendPlaying()
  playAudio(e);
  console.log('seq', gameSequence);
})
// // Just a prototype trying to make sounds from events
// reset.addEventListener('click', e => {
//   //endThenReset()
//   playAudio(e);
// })

// Utilities
// Creates random number array for Game
function createGameSequence() {
  gameSequence = [];
  for (let i = 0; i < maxGameLevel; i++) {
    gameSequence.push(getRandomKey());
  }
}

// Random key generator
function getRandomKey() {
  return Math.floor(Math.random() * 4);
};

// getElementId
function getClick(id) {
  return document.getElementById(id);
}

// ------ Start Game ------- //
// Initialize Game

// console.log(gameLevel);