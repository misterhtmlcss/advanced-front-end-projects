function playGame() {
  if(gameLevel > 0){
    if(gameLevel <= 5){
      console.log("level 3 or less", gameLevel)
    }
    if (gameLevel > 5 && gameLevel < 9){
      console.log('gameLevel 5 to 8', gameLevel)
    }
    if(gameLevel > 20) {
      console.log('Too much stuff')
    }
  }
  gameLevel++
}

/*
  pseudo code:
  When the userSequence reaches the length equal to the gameLevel,
  then initiate a beep to start a new round.
  New round iterates through a spliced version of gameSequence until
  it is completed the full pattern until the userSequence.length + 1.
  Then it invites the user ${your turn?} to mirror the gameSequence
  to the correct length.
*/
function toStartNewLevel() {
  userSequence = []; //Each new level restarts the users input
}

/*
Thinking about using Filter and/or slice during user Audit of selections.
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);  slice is immutable use on gameSequence
*/
function toCheckArr(userInput, key) {
  console.log('userInput: ', userInput)  // testing inbound results
  soundPlayer(queryClick(`audio[data-key="${key}"]`))
  if(userInput){
    for(let i = 0; i <= gameLevel; i++){
      if(gameStrict === false){
        if (userInput[i] === gameSequence[i]){
          toStartNewLevel() // Kick off another level with beeps et al if correct
        } else {
          /*
          Play audio (negative sound)
          clear userSequence and change user-level to show 'Want to try again?'
          User should have to either interact by clicking a button to try again
          or computer can allow them to try again. */
        }
      }
    }
  }
}
