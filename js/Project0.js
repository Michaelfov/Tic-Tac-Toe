// Tic Tac Toe Logic
//
// let origBoard;
// const huPlayer = "X";
// const aiPlayer = "O";
// let currentPlayer = huPlayer;
//
//
// const board = [ null, null, null, null, null, null, null, null, null ];
//
// let boardState = null;
//
// const switchPlayer = function() {
//   if (currentPlayer === huPlayer) {
//     currentPlayer = aiPlayer;
//   } else {
//     currentPlayer = huPlayer;
//   }
//   return currentPlayer;
// }
//
// const checkForWin = function(player) {
//   for (let i = 0; i < 4; i++) {
//     if ((board[0] === player && board[1] === player && board[2] === player)
//     || (board[3] === player && board[4] === player && board[5] === player)
//     || (board[6] === player && board[7] === player && board[8] === player)
//     || (board[0] === player && board[3] === player && board[6] === player)
//     || (board[1] === player && board[4] === player && board[7] === player)
//     || (board[2] === player && board[5] === player && board[8] === player)
//     || (board[0] === player && board[4] === player && board[8] === player)
//     || (board[6] === player && board[4] === player && board[2] === player)) {
//     console.log(`${player} wins!`) ;
//     boardState = `${player} wins!`;
  // } else if (
  //   (board[0] === aiPlayer && board[1] === aiPlayer && board[2] === aiPlayer)
  //   || (board[3] === aiPlayer && board[4] === aiPlayer && board[5] === aiPlayer)
  //   || (board[6] === aiPlayer && board[7] === aiPlayeraiPlayer && board[8] === aiPlayer)
  //   || (board[0] === aiPlayer && board[3] === aiPlayerr && board[6] === aiPlayer)
  //   || (board[1] === aiPlayer && board[4] === aiPlayer && board[7] === aiPlayer)
  //   || (board[2] === aiPlayer && board[5] === aiPlayer && board[8] === aiPlayer)
  //   || (board[0] === aiPlayer && board[4] === aiPlayer && board[8] === aiPlayer)
  //   || (board[6] === aiPlayer && board[4] === aiPlayer && board[2] === aiPlayer))
  // {
  //   console.log(`Please try again.`);
  //   }
  // }
// }
//
// const makeMove = function(boardNumber) {
//   if (boardState) {
//     return;
//   }
//   board[boardNumber] = currentPlayer;
//   console.log(`current Player: ${currentPlayer} and board position: ${boardNumber}`);
//   console.log(board);
//   checkForWin(currentPlayer);
//   switchPlayer();
// }
//






const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]


// DOM Logic
// $(document).ready(function() {

  // const cells = document.querySelectorAll(".cell");
  // startgame();
  let turn = function(squareId, player) {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
  }

  let turnClick = function(square) {
    turn(square.target.id, player);
  }
//
  let startGame = function() {
    document.querySelector(".endgame").style.display = "none";
    origBoard = Array.from(Array(9).keys());
    for (let i = 0; i < cells.length; i++) {
      cells[i].innerText = "";
      cells[i].style.removeProperty("background-color");
      cells[i].addEventListener("click", turnClick, false);
    }
  }
  startGame();
  }
// })
// }
