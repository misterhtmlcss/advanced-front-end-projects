
/* Utilities */
// Manage user input
function keysPressed(e) {
  //console.log('keypressed: ', e);
  if (e.target.className === 'keys') {
    keyPressed = getDataId(e) // Actual Number ID for keyPressed
    //userSequence.push(keyPressed); // Unified approaches around Data-key
    toggleClass(keyPressed);
    checkNum(keyPressed)
  }
}

function strictPressed() {
  if(gameOn !== true){
    if(gameStrict === "1"){
      gameStrict = "-1"
      strict.textContent = "Strict"
      strict.style.backgroundColor = '#ff0000'
      console.log ('boo', gameStrict)
    } else {
      gameStrict = "1"
      strict.textContent = "Easy"
      strict.style.backgroundColor = 'blue'
      console.log('woohoo', gameStrict)
    }
  } else {
    setTimeout(() => {
      help.style.display = 'none';
    }, 2000);
    help.textContent = 'Too late to change! Wait or Reset'
  }
}

// Reset Game
function endThenReset() {
    gameOn = false;
    gameLevel = 0;
    start.textContent = 'Start'
    counter.textContent = 'Level: 1';
    help.textContent = 'Click start to play again! :) '
    userSequence = []; //Resetting user and game Sequence
    gameSequence = [];
    simonReTries = getSimonTries();
    keys.classList.add('disable')
    counter.classList.add('disable')
    start.style.backgroundColor = ''
    //Bring back player once testing complete
    //Console log for now
    console.log('Reset: console logging that soundPlayer() was called' );
    //soundPlayer(queryClick(`audio[data-key="6"]`), 250)
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
  if (gameOn === true){
      if(gameSequence.length === 20){
        help.textContent = `Game on!!`;
        setTimeout(() => {
          help.style.display = 'none';
        }, 2000);
        //playGame()
      }
  }
}


// Gets Data-Key for HTML element access
function getDataId (e){
  return Number(e.target.dataset.key);
}

// Random number generator between 1-4
function getRandomNum() {
  return Math.floor(Math.random() * 4)+1;
};

// getElementId
function getClick(id) {
  return document.getElementById(id);
}
function queryClick(queryId) {
  return document.querySelector(queryId)
}

function getSimonTries() {
  return 5
}

