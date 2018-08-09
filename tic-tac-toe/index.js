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
// Radio buttons
const radioBtns = document.getElementById('menu')
// Setup Start Button
const startBtn = document.getElementById('btn')
// Remaining Choices Counter
const turnSpan = document.getElementsByTagName("span");
// Collect all boxes into an array
const boxes = Array.from(document.querySelectorAll('.grid-item'))
const container = document.querySelector('.grid-container')

// Variables for mutation
let playerOne, gameAi, gameBoard, gameRound, tempClickValue;



// User needs to then click start for game to begin.
const gameState = {
  state: false,
  gameOver: false,
  checkState: function(){
    if(this.state === true && this.gameOver === true){
      reset()
      console.log(this.state, this.gameOver);
    } else {
      init()
      console.log(this.state, this.gameOver);
    }
  },
}

function loadListners() {
  container.classList.toggle('disable')
  // Check a boxes that are clicked
  boxes.forEach(box => box.addEventListener('click',getSelectionValue, false))
  startBtn.addEventListener('click', init, false)

}


function init () {
  gameState.state = true // Set to true at start of game.
  startBtn.textContent = 'Start'
  container.classList.remove('disable')
  boxes.forEach(box => {
    box.innerText = ''
  })
  //console.log(boxes[0]);
  radioBtns.style.display = 'none'
  captureUserSelection()
  console.log('init')
}

// Value of box selected
function getSelectionValue (val){
  tempClickValue = val.target.dataset.square // stores data- value
  if(val.isTrusted === true){
    boxes[tempClickValue].textContent = playerOne
    console.log(`Player clicked this value: ${tempClickValue}`)
  } else {
    console.log(`Computer clicked this value: ${randomNumber()}`)
  }
}

// User needs to select a letter X or O
function captureUserSelection(gameOnConditions) {
  playerOne = document.querySelector('input[name="group"]:checked').value
  if(playerOne === 'x'){
    gameAi = 'y'
  } else {
    gameAi = 'x'
  }
}

// Generates Computer moves
function randomNumber(){
  return Math.floor(Math.random() * Math.floor(10))
}

window.addEventListener("load", loadListners);

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
