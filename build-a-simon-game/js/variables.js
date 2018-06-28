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

// Variable Builder
// getElementId
function getClick(id) {
  return document.getElementById(id);
}
