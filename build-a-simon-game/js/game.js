/*
  pseudo code:
  When the userSequence reaches the length equal to the gameLevel,
  then initiate a beep to start a new round.
  New round iterates through a spliced version of gameSequence until
  it is completed the full pattern until the userSequence.length + 1.
  Then it invites the user ${your turn?} to mirror the gameSequence
  to the correct length.
*/
function startNextLevel() {
  gameLevel++
  if(userSequence.length !== maxGameLevel){
    counter.textContent = `Level: ${gameLevel}`
    simonPlayer()
    //console.log('startNextLevel - > Level:',gameLevel);
  } else {
    counter.textContent = `Level: ${gameLevel}`
    help.textContent = 'You Won! We are resetting your game.......'
    setTimeout(() => {
      initGame()
    }, 3000);
  }
}

function checkNum(key) {
  soundPlayer(queryClick(`audio[data-key="${key}"]`))
  if(key){
    if(userSequence.length <= gameSequence.length){
      if (key !== gameSequence[gameLevel]){
        if(gameStrict === true){
          console.log('gameover:', key, gameSequence[gameLevel])
          help.textContent = 'Game Over! Would you like to try again? If so, click Reset and then Start to begin.'
          start.textContent = 'Game Over'
          setTimeout(() => {
            initGame()
          }, 2000);
        } else {
          // Play Simon's portion again
          // Call play simon function.
          simonHelper()
        }
      } else {
        userSequence.push(key);
        startNextLevel()
      }
    }
  }
}

function gameEnds() {
  help.textContent = 'Game Over! Would you like to try again? If so, click Reset and then Start to begin.'
  start.textContent = 'Game Over'
  setTimeout(() => {
    initGame()
  }, 2000);
}

function simonHelper() {
  if(simonReTries === 0){
    gameEnds()
  } else {
    simonPlayer()
    simonReTries--
    help.innerHTML = `You have only so many chances. <br /> Chances Remaining: ${simonReTries+1}`
  }
}

function simonPlayer() {
  const position = userSequence.length;
  const playListArr = gameSequence.slice(0, position+1);  // Need plus 1 to advance the game for the user.
  animateSimon(playListArr) // Send array!
}

function animateSimon(playListArr) {
  console.log('Animate playListArr', playListArr);
  for (let idx = 0; idx < playListArr.length; ++idx) {
    setTimeout(() => {
      setTimeout(() => {
        console.log(`playListArr[idx], ${playListArr[idx]}, ${idx}`);
        soundPlayer(queryClick(`audio[data-key="${playListArr[idx]}"]`))
      }, 500 * idx);
    }, 500 + (500 * idx));
  };
};




