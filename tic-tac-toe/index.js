'use strict';
/*
User Story: I can play a game of Tic Tac Toe with the computer.
User Story: My game will reset as soon as it's over so I can play again.
User Story: I can choose whether I want to play as X or O.

// My decisions:
1. I check to see if it's in position 4 or not

2. if in position 4 (the user) then I'll choose a random number from 0, 2, 6, 8 positions

3. if user chooses any combination that includes 2 number from a value combination Array (I think or I may go Map; not sure yet) ex [0, [0,1,2]] then I'll take the remaining position that isn't filled.

So the user will select 0 and I'll select a random corner or 4 (always 4 if it's available) and if the user selects 1 or 2 then I'll select the remainder

*/
// Game start from 0
const startGame = 0
// The max number of rounds per game
const maxPlays = 8
// Game board layout
const setupBoard = [[0,1,2], [3,4,5], [6,7,8]];
// Winning combinations
const winningCombo = [
  [0,1,2],   // Top row win
  [3,4,5],   // middle row win
  [6,7,8],   // bottom row win
  [0,3,6],   // left column win
  [1,4,7],   // center column win
  [2,5,8],   // right column win
  [0,4,8],   // top left to bottom right win
  [2,4,6]    // top right to bottom left win
]

// Remaining Turns Counter
const turns = document.getElementById("round");
const span = turns.getElementsByTagName("span");

// Variables for mutation
let playerOne, gameAi, gameState, gameBoard, gameRound, tempClickValue;
/* Update Span for Possible Moves/Rounds Remaining */

// User needs to select a letter X or O
//const menu = document.getElementById('menu')
//const input = document.querySelectorAll('input[name="group"]:checked')//.value

// Event listner to start the game
const startBtn = document.getElementById('btn')
startBtn.addEventListener('click', captureUserSelection)


// User needs to then click start for game to begin.
function init () {
  gameState = true
}

//input.addEventListener('click', captureUserSelection) // Don't need!! Collect user selection on game start
function captureUserSelection(input) {
  playerOne = document.querySelector('input[name="group"]:checked').value
  if(playerOne === 'x'){
    gameAi = 'y'
  } else {
    gameAi = 'x'
  }
  console.log(playerOne, gameAi)
  init(playerOne)
  return
}



/*

// Value of box selected
function getSelectionValue (val){
  tempClickValue = val.target.dataset.square // Click data- value
  if(val.isTrusted === true){
    testCall(`Player clicked this value: ${tempClickValue}`)
  } else {
    testCall(`Computer clicked this value: ${randomNumber()}`)
  }
}

// AI Functions


// This function needs to iterate through both it's previous selections for the AI and the user selections and then resolve a choice.
function aiBoxPicker () {
  //if()
}

// Game tools
function keepScore () {  // Wins collected after each round
  if (gameRound > 0 || gameRound <=5) {
// For this function it receives the winer identity and then increments based on that identity
    round.innerHTML = //`${***WINNER e.g. Player or AI}: ${playerOneScore++|| playerAiScore++}`
  }
}

function roundWinner () { // Calls both keepScore and trackRounds to increment their counters
  if (winner) {
    trackRounds()
  }
}

function trackRounds () { // Keep track of the round being played
  if (gameRound > 0 || gameRound <=5) {
    round.innerHTML = `Round: ${gameRound++}`;
  }
}
// Generates Computer moves
function randomNumber(){
  let choice = Math.floor(Math.random() * Math.floor(10))

  found = board.find(function(choice) {
    if (board[choice] === !NaN) {
      console.log("found a number")
    }
});

}

// Utility Scripts for testing

function testCall (...args) {
  console.log(...args)
}

// Collect all boxes into an array
const boxes = Array.from(document.querySelectorAll('.grid-item'))
// Detect a user click then record into an array which square
// Check a boxes that are clicked
boxes.forEach(box => { box.addEventListener('click',getSelectionValue)})



*/