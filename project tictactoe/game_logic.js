
        
        // Switch to the next player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        
        // AFTER X plays it's  O turn
        if (currentPlayer === 'O') {
            //JUST A FUNCTION TO DELAY THE O MOVE
            setTimeout(playerTwo, 500); 
        }



// Function to simulate 'O' player's move 
function playerTwo() {
    //Allows player to make a move where the player x has made the move
    let emptyCells = [];
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === '') {
                emptyCells.push({ row, col });
            }
        }
    }

}

// Function to check for a win
function checkWin() {
    // To check win in rows.
    for (let row = 0; row < 3; row++) {
        if (board[row][0] !== '' && board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
            return true;
        }
    }
    
    // this is a function to check win in columns.
    for (let col = 0; col < 3; col++) {
        if (board[0][col] !== '' && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
            return true;
        }
    }
    
    // This is a function to check win in diagonals
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return true;
    }
    
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return true;
    }
    
    return false;
}
