/*
User Story: I can play a game of Tic Tac Toe with the computer.
User Story: My game will reset as soon as it's over so I can play again.
User Story: I can choose whether I want to play as X or O.
*/
/* // Game board layout
const setupBoard = [[0, 1, 2], [3, 4, 5], [6, 7, 8]] */
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
const maxPlays = 8
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
  "startState": function (bool) {
    this.state = bool
    container.classList.remove('disable')
    captureUserSelection()
  },
  "resetState": function (bool) {
    this.state = bool
    turnSpan.textContent = "9"
    boxes.forEach((box) => {
      box.textContent = ''
    })
    radioBtns.style.display = ""
    console.clear()
  }
}
// Variables for mutation
let gameAi, gameBoard, playerOne, tempClickValue

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
  tempClickValue = val.target.dataset.square
  boxes[tempClickValue].innerHTML = `<div class="gameInput">${playerOne}</div>`
  console.log(`Player clicked this value: ${tempClickValue}`)
}

// User needs to select a letter X or O
function captureUserSelection () {
  playerOne = document.querySelector('input[name="group"]:checked').value
  if (playerOne === 'x') {
    gameAi = 'y'
  } else {
    gameAi = 'x'
  }
}

// Generates Computer moves
function randomNumber () {
  return Math.floor(Math.random() * Math.floor(10))
}

window.addEventListener("load", loadListners)

/* eslint-disable */
/*
// ***** TESTING OUT OBSERVERS ***** //
var observer = new MutationObserver(function(mutations) {
	// For the sake of...observation...let's output the mutation to console to see how this all works
	mutations.forEach(function(mutation) {
    console.log(mutation.type, mutation);
	});
});

// Notify me of everything!
var observerConfig = {
	attributes: true,
	childList: true,
	characterData: true
};

// Node, config
// In this case we'll listen to all changes to body and child nodes
var targetNode = document.gameState
observer.observe(targetNode, observerConfig);
*/
/* eslint-enable */