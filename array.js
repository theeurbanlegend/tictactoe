// Array to represent the Tic Tac Toe board
const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  // Object to store players
  const players = {
    'X': 'Player 1',
    'O': 'Player 2'
  };
  
  // Function to check if a player has won
  function checkWin(player) {
    // Check rows
    for (let row = 0; row < 3; row++) {
      if (
        board[row][0] === player &&
        board[row][1] === player &&
        board[row][2] === player
      ) {
        return true;
      }
    }
  
    // Check columns
    for (let col = 0; col < 3; col++) {
      if (
        board[0][col] === player &&
        board[1][col] === player &&
        board[2][col] === player
      ) {
        return true;
      }
    }
  
    // Check diagonals
    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    ) {
      return true;
    }
  
    if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    ) {
      return true;
    }
  
    return false;
  }
  
  // Function to make a move
  function makeMove(row, col, player) {
    if (board[row][col] === '') {
      board[row][col] = player;
      return true;
    }
    return false;
  }
  
  console.log(board);
  console.log(checkWin('X')); // Check if Player 1 (X) has won
  console.log(checkWin('O')); // Check if Player 2 (O) has won
  