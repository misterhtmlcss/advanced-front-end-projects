/* Game HTML Elements */
/* Game JS Functions */
// Initialization of Game function
function initGame (){ //Simon Says Keys aren't show until StartButton is Clicked
  if(gameOn === false) {
    gameOn = true;
    console.log('gameOn', gameOn);
    start.textContent = 'Reset'
    makeClickableKeys()
    createGameSequence();
  } else if(gameLevel < 20 && gameOn !== false) { // User reset game
      endThenReset()
      console.log('This game is being reset', 'gameOn', gameOn)
  } else {
      console.log('testing Init game')
  }
}

// Simon Interactive Keys Listener
keys.addEventListener('click', e => {
  if (e.target.className === 'keys') {
    keyPressed = getDataId(e) // Actual Number ID for keyPressed
    userSequence.push(keyPressed); // Unified approaches around Data-key
    userInput(keyPressed, userSequence)
  }
});

// StartButton and ResetButton Listners
// Just a prototype trying to make sounds from events
start.addEventListener('click', initGame)
// Strict Button: Needs function
//strict.addEventListener('click', endThenReset)