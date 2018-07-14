
/* Utilities */
// Manage user input
function keysPressed(e) {
  if (e.target.className === 'keys') {
    keyPressed = getDataId(e) // Actual Number ID for keyPressed
    userSequence.push(keyPressed); // Unified approaches around Data-key
    toggleClass(keyPressed);
    toCheckArr(userSequence, keyPressed)
    if (gameOn === true) {
      start.textContent = 'Reset'
    }
    //console.log(gameSequence);
  }
}

// Reset Game
function endThenReset() {
    gameLevel = 0;
    start.textContent = 'Start'
    counter.textContent = 'Level: 1';
    help.textContent = 'Click start to play again! :) '
    userSequence = []; //Resetting user Sequence
    soundPlayer(queryClick(`audio[data-key="6"]`), 1000)
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
