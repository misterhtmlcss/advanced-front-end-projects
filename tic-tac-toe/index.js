/*
User Story: I can play a game of Tic Tac Toe with the computer.
User Story: My game will reset as soon as it's over so I can play again.
User Story: I can choose whether I want to play as X or O.
*/
/* eslint-disable */
// Winning combinations
const winningCombo = [
    [0, 1, 2], // Top row win
    [3, 4, 5], // middle row win
    [6, 7, 8], // bottom row win
    [0, 3, 6], // left column win
    [1, 4, 7], // center column win
    [2, 5, 8], // right column win
    [0, 4, 8], // top left to bottom right win
    [2, 4, 6] // top right to bottom left win
];
/* eslint-enable */
// The max number of rounds per game
const maxPlays = 9
// Radio buttons
const radioBtns = document.getElementById('menu')
// Setup Start Button
const startBtn = document.getElementById('btn')
// Remaining Choices Counter
const turnSpan = document.getElementById('round')
// Collect all boxes into an array
const boxes = Array.from(document.querySelectorAll('.grid-item'))
const container = document.querySelector('.grid-container')


// User needs to then click start for game to begin.
const gameState = {
  "state": false,
  "currentPlayer": "",
  "startState": function (bool) {
    this.state = bool
    container.classList.remove('disable')
    remainingPlays = maxPlays
    captureUserSelection()
  },
  "resetState": function (bool) {
    this.state = bool
    turnSpan.textContent = "9"
    gameBoard = new Array(9)
    boxes.forEach((box) => {
      box.textContent = ''
    })
    radioBtns.style.display = ""
    // console.clear()
  }
}
// Variables for mutation
let clickValue, gameAi, humanPlayer, remainingPlays
let gameBoard = new Array(9)

function loadListners () {
  // Make squares unclickable onload, until StartBtn clicked.
  container.classList.toggle('disable')
  // Check a boxes that are clicked
  boxes.forEach((box) => box.addEventListener('click', getSelectionValue, false))
  startBtn.addEventListener('click', statusCheck, false)
}

function statusCheck() {
  // Set to true at start of game.
  if (gameState.state === false) {
    gameState.startState(true)
  } else {
    gameState.resetState(false)
  }
}

// Value of box selected
function getSelectionValue (val) {
  // stores data- value
  clickValue = val.target.dataset.square
  pubVal(clickValue, humanPlayer)
  storeVal(clickValue, humanPlayer)
}

function pubVal(val, user) {
  remainingPlays--
  console.log(gameBoard, remainingPlays)
  boxes[val].innerHTML = `<div class="gameInput">${user}</div>`
}

function storeVal(clickedValue, playerId) {
  // Using the fixed position of the array, place the playerId ex X at position clickedValue
  gameBoard[clickedValue] = playerId
  aiTurn()
}

function aiTurn () {
  const aiChoice = randomNumber()
  if (gameBoard[aiChoice] === null) {
    gameBoard[aiChoice] = gameAi
    pubVal(aiChoice, gameAi)
  } else {
    aiTurn()
    console.log('called aiTurn again', aiChoice)
  }
}


// User needs to select a letter X or O
function captureUserSelection () {
  humanPlayer = document.querySelector('input[name="group"]:checked').value
  if (humanPlayer === 'X') {
    gameAi = 'Y'
  } else {
    gameAi = 'X'
    aiTurn(gameAi)
  }
}

/* Tests if game Won */
function testWin(val) {
  if (
    gameBoard[0] === val && gameBoard[1] === val && gameBoard[2] === val ||
    gameBoard[3] === val && gameBoard[4] === val && gameBoard[5] === val ||
    gameBoard[6] === val && gameBoard[7] === val && gameBoard[8] === val ||
    gameBoard[0] === val && gameBoard[3] === val && gameBoard[6] === val ||
    gameBoard[1] === val && gameBoard[4] === val && gameBoard[7] === val ||
    gameBoard[2] === val && gameBoard[5] === val && gameBoard[8] === val ||
    gameBoard[0] === val && gameBoard[4] === val && gameBoard[8] === val ||
    gameBoard[2] === val && gameBoard[4] === val && gameBoard[6] === val
  ) {
    // console.log(`${val} wins!`)

    // NOte?

    // disableGameBoard()
  }
}



// Generates Computer moves
function randomNumber () {
  return Math.floor(Math.random() * Math.floor(10))
}

window.addEventListener("load", loadListners)