/* Game HTML Elements */
const start = getClick('start'),
      reset = getClick('reset'),
      counter = getClick('counter'),
      help = getClick('help'),
      keys = getClick('keys-list'),
      audio = document.querySelectorAll('audio'),
      strict = getClick('setting');

/* Game JS Variables */
const maxGameLevel = 20;
let gameLevel = 1; // Game 'rounds' if that helps
let gameStrict = false;  // We use this to change the game from Strict to normal
let gameOn = false;
let simonReTries = 5;

// Read up on what is Strict and what is not strict.
let gameSequence = []; //Computer fills this on 'startBtn'
let userSequence = []; // User fills this as he goes
let keyPressed;

/* Game JS Functions */
// Initialization of Game function
function initGame(){
  if(gameOn === false) {
    gameOn = true;
    makeClickableKeys()
    createGameSequence();
    simonPlayer(gameLevel)
  } else {
    endThenReset(500)
  }
}

function checkNum() {
  for (let i = 0; i < userSequence.length; i++) {
    if (userSequence[i] !== gameSequence[i]) {
      if(gameStrict === true){
        gameEnds()
        return
      }
      else {
        simonHelps(gameLevel)
      }
    }
    if(i === gameLevel -1) {
      if (gameLevel !== maxGameLevel) {
        gameLevel++
        setTimeout(() => {
          simonPlayer(gameLevel)
        }, 500)
      } else {
        userWins()
        return
      }
    }
  }
}
function simonPlayer(level) {
  const playList = gameSequence.slice(0, level)
  userSequence = []; // reset user pattern
  counter.textContent = `Level: ${(level === 0) ? 1 : level}`
  keys.classList.add('disable')
  for (let idx = 0; idx < playList.length; idx++) {
    setTimeout(() => {
      setTimeout(() => {
        soundPlayer(playList[idx])
        toggleClass(playList[idx], idx)
        if (level-1 === idx){
          keys.classList.remove('disable')
        }
      }, 500 * idx);
    }, 500 + (500 * idx))
  }
}
// When not set to Strict, simonHelps allows for 5 re-tries
function simonHelps() {
  console.log('simon helps');
  --simonReTries
  if(simonReTries === 0){
    gameEnds()
  } else {
    console.log('simonHelps', simonReTries)
    simonPlayer(gameLevel)
    help.innerHTML = `You have only so many chances. <br /> Chances Remaining: ${simonReTries}`
  }
}
// Game ends: Call endThenReset() to reboot
function gameEnds() {
  changeText (help, 'Game Over! Would you like to try again? If so, click Reset and then Start to begin.')
  changeText (start, 'Game Over')
  endThenReset()
}
function userWins() {
  counter.textContent = `Level: ${gameLevel}`
  help.textContent = 'You Won! We are resetting your game.......'
  endThenReset()
}
// Reset Game
function endThenReset(timeOut) {
  if(timeOut === undefined){
    timeOut = 1500
    console.log('worked')
  }
  setTimeout(() => {
    gameOn = false;
    gameLevel = 1;
    start.textContent = 'Start'
    counter.textContent = `Level: ${gameLevel}`;
    userSequence = []; //Resetting user and game Sequence
    gameSequence = [];
    changeText(help, 'Click start to play again! :) ')
    simonReTries = 5;
    keys.classList.add('disable')
    counter.classList.add('disable')
    start.style.backgroundColor = ''
    console.clear()
  }, timeOut);
}
// Adds class and removes class. Needs a element data-key and the class to work
function toggleClass (...args) { // SHOWS the key. No sound with this function
  const keyHTML = queryClick(`[data-key="${args[0]}"]`)
  userSequence.length === 0 ? keyHTML.textContent = args[1]+1 : keyHTML.textContent = userSequence.length
  keyHTML.classList.toggle('playing')
  setTimeout(() => {
    keyHTML.classList.toggle('playing')
    keyHTML.textContent = ""
  }, 500);
}
// Play audio when there are game interactions
function soundPlayer(keySoundId){
  const keyAudioFile = queryClick(`audio[data-key="${keySoundId}"]`)
  keyAudioFile.currentTime = 0; // Rewinds sound for multiple clicks
  keyAudioFile.play(); //Play() Using Audio Method
}

// Manage user input
function keysPressed(e) {
  if (e.target.className === 'keys') {
    keyPressed = getDataId(e) // Actual Number ID for keyPressed
    userSequence.push(keyPressed);
    toggleClass(keyPressed) // Shows pressed key
    soundPlayer(keyPressed) // Makes sound for pressed key
    checkNum() // Simon checks number and compares it to it's own gameSequence
  }
}
/* --------------
* Settings
*/
// Strict Setting/Switch
function strictPressed() {
  if(gameOn === false){ //Game must not have started yet
    if(gameStrict === false){
      gameStrict = true //Strict is on!
      strict.textContent = "Strict"
      strict.style.backgroundColor = '#ff0000'
      //console.log(gameStrict)
    } else {
      gameStrict = false
      strict.textContent = "Easy"
      strict.style.backgroundColor = 'blue'
      //console.log(gameStrict);
    }
  } else {
    //console.log('final else gameStrict:', gameStrict);
    changeText(help, 'Too late to change! Wait or Reset')
  }
}
// Creates random number array for Game
function createGameSequence() {
  let i=0
  let currentNum;
  while(i < maxGameLevel){
    currentNum = getRandomNum()
    gameSequence.push(currentNum)
    i++
  }
}
// Allow Simon Interactive keys to be clicked
function makeClickableKeys() {
  if (gameOn === true) {
    const keys = queryClick(`#keys-list`)
    keys.classList.remove('disable')
    counter.classList.remove('disable')
    start.textContent = 'Reset'
    start.style.backgroundColor = 'red'
  }
}
// Use to assist with text information change
function changeText(item, text){
  item.textContent = text;
  if(item === 'help'){
    setTimeout(() => {
      item.textContent = 'Waiting to see what you do next!';
    }, 1500);
  }
}
/* --------------
* Utility functions
*/
// Gets Data-Key for HTML element access
function getDataId (e){
  return Number(e.target.dataset.key);
}

// Random number generator between 1-4
function getRandomNum() {
  return Math.floor(Math.random() * 4) + 1
}
// getElementId
function getClick(id) {
  return document.getElementById(id)
}
function queryClick(queryId) {
  return document.querySelector(queryId)
}

/* --------------
* Event Listners
*/
// Simon Interactive Keys Listener
keys.addEventListener('click', keysPressed)
// StartButton and ResetButton Listners
// Just a prototype trying to make sounds from events
start.addEventListener('click', initGame)
// Strict Button: Needs function
strict.addEventListener('click', strictPressed)
