/*

User Story: I can play a game of Tic Tac Toe with the computer.

User Story: My game will reset as soon as it's over so I can play again.

User Story: I can choose whether I want to play as X or O.

// My decisions:
1. I check to see if it's in position 4 or not

2. if in position 4 (the user) then I'll choose a random number from 0, 2, 6, 8 positions

3. if user chooses any combination that includes 2 number from a value combination Array (I think or I may go Map; not sure yet) ex [0, [0,1,2]] then I'll take the remaining position that isn't filled.

So the user will select 0 and I'll select a random corner or 4 (always 4 if it's available) and if the user selects 1 or 2 then I'll select the remainder

  [1, 2, 3]
  [4, 5, 6]
  [7, 8, 9]

*/
let playerOne, playerAi;
let boardh = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let boardv =[[1, 4, 7], [2, 5, 8], [3, 6, 9]];

function ()


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
  )

*/