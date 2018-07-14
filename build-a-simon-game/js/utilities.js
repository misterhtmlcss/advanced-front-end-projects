
/* Utilities */
// Manage user input
function userInput (keyNumId, userArray) {
  toggleClass(keyNumId);
  toCheckArr(userArray, keyNumId)
}

// Adds class and removes class. Needs a element data-key and the class to work
function toggleClass (id) {
  const keyHTML = queryClick(`[data-key="${id}"]`)
  keyHTML.classList.toggle('playing')
  setTimeout(() => {
    keyHTML.classList.toggle('playing')
  }, 300);
}
// Function hide keys until StartButton pressed
function makeClickableKeys () {
  const keys = queryClick(`#keys-list`)
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
    soundPlayer(queryClick(`audio[data-key="6"]`), 1500)
  //}
}

// Play audio when there are game interactions
function soundPlayer(keySoundId, timeOut){
  if(timeOut === undefined){
    timeOut = 2000;
  }
  keySoundId.currentTime = 0; // Will rewind sound for multiple clicks
  keySoundId.play(); //Play() Using Audio Method
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
function queryClick(queryId) {
  return document.querySelector(queryId)
}
