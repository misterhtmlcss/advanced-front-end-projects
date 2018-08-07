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
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]]
// Variables for mutation
let playerOne, playerAi, gameBoard;

/* Update Span for Possible Moves/Rounds Remaining */
const round = document.getElementById("round");
const span = round.getElementsByTagName("span");

const boxes = Array.from(document.querySelectorAll('.grid-item'))
const resetBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let playerOneScore, playerAiScore, found;
let gameRound = 0;
let board = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Change values for Selection
let roundWonBy = 0 // Who won the round; Tie:0, HumanWin:1, AIWin: -1
let winner = false; // After 3 rounds; overall winner is declared
let tempClickValue; // Value of last user selection goes here.


// Detect a user click then record into an array which square
// Check a boxes that are clicked
boxes.forEach(box => { box.addEventListener('click',getSelectionValue)})

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



  if (choice === )
  return ;
}

// Utility Scripts for testing

function testCall (...args) {
  console.log(...args)
}
/*
function winning(board, player){
if (
  (board[0] == player && board[1] == player && board[2] == player) ||
  (board[3] == player && board[4] == player && board[5] == player) ||
  (board[6] == player && board[7] == player && board[8] == player) ||
  (board[0] == player && board[3] == player && board[6] == player) ||
  (board[1] == player && board[4] == player && board[7] == player) ||
  (board[2] == player && board[5] == player && board[8] == player) ||
  (board[0] == player && board[4] == player && board[8] == player) ||
  (board[2] == player && board[4] == player && board[6] == player)
  )
  { return true; } else
  { return false; }
}

// Mike's code
if (
    (board[0][0] === symbol && board[0][1] === symbol && board[0][2] === symbol) ||
    (board[1][0] === symbol && board[1][1] === symbol && board[1][2] === symbol) ||
    (board[2][0] === symbol && board[2][1] === symbol && board[2][2] === symbol) ||
    (board[0][0] === symbol && board[1][0] === symbol && board[2][0] === symbol) ||
    (board[0][1] === symbol && board[1][1] === symbol && board[2][1] === symbol) ||
    (board[0][2] === symbol && board[1][2] === symbol && board[2][2] === symbol) ||
    (board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) ||
    (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol)
  );

*/