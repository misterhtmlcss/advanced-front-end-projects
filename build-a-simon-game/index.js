// Counter to keep track of current game level
const maxGameLevel = 20;
let gameLevel = 0;
let gameSequence = [];
let userSequence = [];
const start = getClick('start');
const reset = getClick('reset');
const counter = getClick('counter');
const keys = document.querySelectorAll('.keys')
const audio = document.querySelectorAll('audio')
//console.log(keys)

/*
function init(){
  createSequence()
  loadGame ()
}

function loadGame (){
  if(gameLevel >= 0 || gameLevel < 20){
    gameLevel++
  } else {
    // Should we make this a reset?
    gameLevel = 0
  }
}


function toStartNewLevel () {

}

function toCheckArr (){
  if (userSequence == gameSequence) {
    // Do something
  } else {
    // Do something else
  }
}

function appendPlaying (){

}
function endThenReset (){

}
*/
function playAudio (e) {
  const audioId = e.target.dataset.key
  const calledAudio = document.querySelector(`audio[data-key="${audioId}"]`)
  calledAudio.currentTime = 0; // Will rewind sound for multiple clicks
  calledAudio.play()
}



// Listeners
keys.forEach((key) => {
  key.addEventListener('click', function (e) {
    //console.log(e)
    key.classList.add('playing')
    playAudio(e)
  });
});


// Just a prototype trying to make sounds from events
start.addEventListener('click', function(e){
  //loadGame()
  //appendPlaying()
  playAudio(e)
})
// Just a prototype trying to make sounds from events
reset.addEventListener('click', function(e){
  //endThenReset()
  playAudio(e)
})

// Utilities
// Creates random number array for Game
function createSequence () {
  for(let i = 0; i < maxGameLevel; i++){
    gameSequence.push(getRandomKey());
  }
}

// Random key generator
function getRandomKey () {
  return Math.floor(Math.random() * 4)
};

// getElementId
function getClick (id) {
  return document.getElementById(id);
}

// ------ Start Game ------- //
// Initialize Game
//init()