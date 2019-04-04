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
//   } else if (
//     (board[0] === aiPlayer && board[1] === aiPlayer && board[2] === aiPlayer)
//     || (board[3] === aiPlayer && board[4] === aiPlayer && board[5] === aiPlayer)
//     || (board[6] === aiPlayer && board[7] === aiPlayeraiPlayer && board[8] === aiPlayer)
//     || (board[0] === aiPlayer && board[3] === aiPlayerr && board[6] === aiPlayer)
//     || (board[1] === aiPlayer && board[4] === aiPlayer && board[7] === aiPlayer)
//     || (board[2] === aiPlayer && board[5] === aiPlayer && board[8] === aiPlayer)
//     || (board[0] === aiPlayer && board[4] === aiPlayer && board[8] === aiPlayer)
//     || (board[6] === aiPlayer && board[4] === aiPlayer && board[2] === aiPlayer))
//   {
//     console.log(`Please try again.`);
//     }
//   }
// }
//
// const makeMove = function(boardNumber) {
//   if (boardState) {
//
//     return;
//   }
//   board[boardNumber] = currentPlayer;
//   console.log(`current Player: ${currentPlayer} and board position: ${boardNumber}`);
//   console.log(board);
//   checkForWin(currentPlayer);
//   switchPlayer();
// }
//
//
//
//
//
//
//
// const winCombos = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [6, 4, 2]


// DOM Logic
// $(document).ready(function() {
//
//   const cells = document.querySelectorAll(".cell");
//   startgame();
//   let turn = function(squareId, player) {
//     origBoard[squareId] = player;
//     document.getElementById(squareId).innerText = player;
//   }
//
//   let turnClick = function(square) {
//     turn(square.target.id, player);
//   }
// //
//   let startGame = function() {
//     document.querySelector(".endgame").style.display = "none";
//     origBoard = Array.from(Array(9).keys());
//     for (let i = 0; i < cells.length; i++) {
//       cells[i].innerText = "";
//       cells[i].style.removeProperty("background-color");
//       cells[i].addEventListener("click", turnClick, false);
//     }
//   }
//   startGame();
//   }
// })
// }


let origBoard;
const huPlayer = "X";
const aiPlayer = "O";


const board = [ null, null, null, null, null, null, null, null, null ];
let boardState = null;

let currentPlayer = huPlayer;

const switchPlayer = function() {
  if (currentPlayer === huPlayer) {
    currentPlayer = aiPlayer;
  } else  {
    currentPlayer = huPlayer;
  }
  return currentPlayer;
}


const checkForWin = function(player) {
  for (let i = 0; i < 4; i++) {
    if ((board[0] === player && board[1] === player && board[2] === player)
    || (board[3] === player && board[4] === player && board[5] === player)
    || (board[6] === player && board[7] === player && board[8] === player)
    || (board[0] === player && board[3] === player && board[6] === player)
    || (board[1] === player && board[4] === player && board[7] === player)
    || (board[2] === player && board[5] === player && board[8] === player)
    || (board[0] === player && board[4] === player && board[8] === player)
    || (board[6] === player && board[4] === player && board[2] === player)) {
    alert(`${player} wins!`);
    window.location.reload(false);
    return;
    boardState = `${player} wins!`;
  } else if (board[0] !== null && board[1] !== null && board[2] !== null && board[3] !== null && board[4] !== null && board[5] !== null && board[6] !== null && board[7] !== null && board[8] !== null && board[9] !== null){
    alert(`Please try again.`);
    window.location.reload(false);
    return;
    }
  }
}


const makeMove = function(boardNumber) {
  if (boardState) {
    console.log('bad move');
    return;
  }

  if (board[boardNumber]) {
    console.log('bad move');
    return;
  }
  board[boardNumber] = currentPlayer;
  console.log(`current Player: ${currentPlayer} and board position: ${boardNumber}`);

  checkForWin(currentPlayer);
  switchPlayer();
  aiMove();
  switchPlayer();
}

let aiMove = function() {
    if (currentPlayer === aiPlayer && board[0] !== huPlayer && board[0] !== aiPlayer) {
    board[0] = aiPlayer;
    aiDisplay(0);
    checkForWin(aiPlayer);
  } else if (currentPlayer === aiPlayer && board[1] === huPlayer && board[2] === huPlayer && board[3] === null) {
    board[3] = aiPlayer;
    aiDisplay(3);
    checkForWin(aiPlayer);
  } else if (currentPlayer === aiPlayer && board[0] === huPlayer && board[1] === huPlayer && board[2] === null) {
    board[2] = aiPlayer;
    aiDisplay(2);
    checkForWin(aiPlayer);
  } else if (currentPlayer === aiPlayer && board[0] === huPlayer && board[2] === huPlayer && board[1] === null) {
    board[1] = aiPlayer;
    aiDisplay(1);
    checkForWin(aiPlayer);
  } else if (currentPlayer === aiPlayer && board[1] === huPlayer && board[2] === huPlayer && board[0] === null) {
    board[0] = aiPlayer;
    aiDisplay(0);
    checkForWin(aiPlayer);
  } else if (currentPlayer === aiPlayer && board[3] === huPlayer && board[4] === huPlayer && board[5] === null) {
    board[5] = aiPlayer;
    aiDisplay(5);
    checkForWin(aiPlayer);
  } else if (currentPlayer === aiPlayer && board[3] === huPlayer && board[5] === huPlayer && board[4] === null) {
    board[4] = aiPlayer;
    aiDisplay(4);
    checkForWin(aiPlayer);
  } else if (currentPlayer === aiPlayer && board[4] === huPlayer && board[5] === huPlayer && board[3] === null) {
    board[3] = aiPlayer;
    aiDisplay(3);
    checkForWin(aiPlayer);
  } else if (currentPlayer === aiPlayer && board[6] === huPlayer && board[7] === huPlayer && board[8] === null) {
    board[8] = aiPlayer;
    aiDisplay(8);
    checkForWin(aiPlayer);
  } else if (currentPlayer === aiPlayer && board[6] === huPlayer && board[8] === huPlayer && board[7] === null) {
    board[7] = aiPlayer;
    aiDisplay(7);
    checkForWin(aiPlayer);
  } else if (currentPlayer === aiPlayer && board[7] === huPlayer && board[8] === huPlayer && board[6] === null) {
    board[6] = aiPlayer;
    aiDisplay(6);
    checkForWin(aiPlayer);
  } else if (currentPlayer === aiPlayer && board[0] === huPlayer && board[3] === huPlayer && board[6] === null) {
    board[6] = aiPlayer;
    aiDisplay(6);
    checkForWin(aiPlayer);
  } else if (currentPlayer === aiPlayer && board[3] === huPlayer && board[6] === huPlayer && board[0] === null) {
    board[0] = aiPlayer;
    aiDisplay(0);
    checkForWin(aiPlayer);
  } else if (currentPlayer === aiPlayer && board[0] === huPlayer && board[6] === huPlayer && board[3] === null) {
    board[3] = aiPlayer;
    aiDisplay(3);
    checkForWin(aiPlayer);
  } else if (currentPlayer === aiPlayer && board[1] === huPlayer && board[4] === huPlayer && board[7] === null) {
    board[7] = aiPlayer;
    aiDisplay(7);
    checkForWin(aiPlayer);
  } else if (currentPlayer === aiPlayer && board[1] === huPlayer && board[7] === huPlayer && board[4] === null) {
    board[4] = aiPlayer;
    aiDisplay(4);
    checkForWin(aiPlayer);
  } else if (currentPlayer === aiPlayer && board[4] === huPlayer && board[7] === huPlayer && board[1] === null) {
    board[1] = aiPlayer;
    aiDisplay(1);
    checkForWin(aiPlayer);
  } else if (currentPlayer === aiPlayer && board[2] === huPlayer && board[5] === huPlayer && board[8] === null) {
    board[8] = aiPlayer;
    aiDisplay(8);
    checkForWin(aiPlayer);
    } else if (currentPlayer === aiPlayer && board[2] === huPlayer && board[8] === huPlayer && board[5] === null) {
      board[5] = aiPlayer;
      aiDisplay(5);
    } else if (currentPlayer === aiPlayer && board[5] === huPlayer && board[8] === huPlayer && board[2] === null) {
      board[2] = aiPlayer;
      aiDisplay(2);
      checkForWin(aiPlayer);
    } else if (currentPlayer === aiPlayer && board[0] === huPlayer && board[4] === huPlayer && board[8] === null) {
      board[8] = aiPlayer;
      aiDisplay(8);
      checkForWin(aiPlayer);
    } else if (currentPlayer === aiPlayer && board[0] === huPlayer && board[8] === huPlayer && board[4] === null) {
      board[4] = aiPlayer;
      aiDisplay(4);
      checkForWin(aiPlayer);
    } else if (currentPlayer === aiPlayer && board[4] === huPlayer && board[8] === huPlayer && board[0] === null) {
      board[0] = aiPlayer;
      aiDisplay(0);
      checkForWin(aiPlayer);
    } else if (currentPlayer === aiPlayer && board[6] === huPlayer && board[4] === huPlayer && board[2] === null) {
      board[2] = aiPlayer;
      aiDisplay(2);
      checkForWin(aiPlayer);
    } else if (currentPlayer === aiPlayer && board[6] === huPlayer && board[2] === huPlayer && board[4] === null) {
      board[4] = aiPlayer;
      aiDisplay(4);
      checkForWin(aiPlayer);
    } else if (currentPlayer === aiPlayer && board[4] === huPlayer && board[2] === huPlayer && board[6] === null) {
      board[6] = aiPlayer;
      aiDisplay(6);
      checkForWin(aiPlayer);
    } else if (currentPlayer === aiPlayer && board[4] !== aiPlayer && board[4] !== huPlayer) {
       board[4] = aiPlayer;
       aiDisplay(4);
       checkForWin(aiPlayer);
    } else if (currentPlayer === aiPlayer && board[6] !== aiPlayer && board[6] !== huPlayer) {
       board[6] = aiPlayer;
       aiDisplay(6);
       checkForWin(aiPlayer);
    } else if (currentPlayer === aiPlayer && board[1] !== aiPlayer && board[1] !== huPlayer) {
      board[1] = aiPlayer;
      aiDisplay(1);
      checkForWin(aiPlayer);
    } else if (currentPlayer === aiPlayer && board[2] !== aiPlayer && board[2] !== huPlayer) {
      board[2] = aiPlayer;
      aiDisplay(2);
      checkForWin(aiPlayer);
    } else if (currentPlayer === aiPlayer && board[3] !== aiPlayer && board[3] !== huPlayer) {
      board[3] = aiPlayer;
      aiDisplay(3);
      checkForWin(aiPlayer);
    } else if (currentPlayer === aiPlayer && board[5] !== aiPlayer && board[5] !== huPlayer) {
      board[5] = aiPlayer;
      aiDisplay(5);
      checkForWin(aiPlayer);
    } else if (currentPlayer === aiPlayer && board[7] !== aiPlayer && board[7] !== huPlayer) {
      board[7] = aiPlayer;
      aiDisplay(7);
      checkForWin(aiPlayer);
    } else if (currentPlayer === aiPlayer && board[8] !== aiPlayer && board[8] !== huPlayer) {
      board[8] = aiPlayer;
      aiDisplay(8);
      checkForWin(aiPlayer);
    }
}

const aiDisplay = function(id) {
  $(`#${id}`).html(currentPlayer);
}


$(document).ready(function() {

  $('.cell').on('click',function(){
    let x = $(this).attr('id');
    console.log(currentPlayer);
    if (board[x]) {
      console.log('bad move');
      return;
    }

    $(this).html(huPlayer);
    let y = $(this).attr('id');
    if (board[y]) {
      console.log("bad Move");
      return;
    }
    makeMove(x);
    console.log(board);
  });


})

// const startGame = function() {
//   $(".endgame").css("display": "none");
//   $(".cell").text = "";
//
// }


// console.log(makeMove(1));
// console.log(makeMove(2));
// console.log(makeMove(4));
// console.log(makeMove(5));

// function startGame() {
//   const cells = document.querySelectorAll('.cell');
//
// document.querySelector(".endgame").style.display = "none";
// origBoard = Array.from(Array(9).keys());
// for (var i = 0; i < cells.length; i++) {
// cells[i].innerText = '';
// cells[i].style.removeProperty('background-color');
// }
//
// document.addEventListener("DOMContentLoaded", function(event) {
// startGame();
// })
