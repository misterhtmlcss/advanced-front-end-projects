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
        if(gameStrict === "-1"){
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
  const playListSize = playListArr.length
  let idx = 0

  if (userSequence.length === 0){
    // Play first key
    const firstKey = gameSequence[0]
    soundPlayer(queryClick(`audio[data-key="${firstKey}"]`))
    toggleClass(firstKey)
    // Wait for user to click.
    //User needs to click button
  } else {

    /* function doSetTimeout(idx) {
      setTimeout(() => {
        soundPlayer(queryClick(`audio[data-key="${playListArr[idx]}"]`))
        //toggleClass(playListArr[idx])
      }, 2000);
    }
    for (idx; idx < playListSize; idx++){
      doSetTimeout(idx);
      //console.log('forloop', idx, playListSize);
    } */
    function timer (idx){
      setInterval(()=>{
        soundPlayer(queryClick(`audio[data-key="${playListArr[idx]}"]`))
        idx++
        if(idx === playListSize){
        }
      }, 2000)
      clearInterval()
    }
    timer()
    //console.log('simonPlayer:', position, playListArr, playListSize)
  }
}






/* function loop (idx, playList) {
    setTimeout(function () {
      soundPlayer(queryClick(`audio[data-key="${i}"]`))
      toggleClass(i)
      if (i++) loop(i);      //  decrement i and call loop again if i > 0
    }, 1000)
 });
 loop(i, playList)
*/