/*
   calculateWinner: 
      - Given an array of 9 squares, checks for a winner and return 'X', 'O', or null as appropriate.
      - called in the Board component's render function to check if a player has won.
      - called in the Game component's render function to display a message if a player has won.
*/

/*  squares: 
      -  array of 9 squares that make up the board with values 'X', 'O', or null 
         that are updated by the Board component's handleClick function
*/
   const calculateWinner = (squares) => {
    // winning combinations:
    const lines = [
        [0, 1, 2], // row 1
        [3, 4, 5], // row 2
        [6, 7, 8], // row 3
        [0, 3, 6], // col 1
        [1, 4, 7], // col 2
        [2, 5, 8], // col 3
        [0, 4, 8], // diag 1
        [2, 4, 6], // diag 2
    ];

    // loop through all the winning combinations to see if the squares array has any of them
    for (let i = 0; i < lines.length; i++) {
        // destructure the winning combinations into variables a, b, and c
        const [a, b, c] = lines[i]; 
        /* 
           Check for a winner:
      
           [0, 1, 2] => a, b, c
           step 1: check if squares[0] exists
           step 2: check if squares[0] === squares[1] - X and X or O and O
           step 3: check if squares[0] === squares[2] - X and X or O and O
           step 4: if all 3 are true, return squares[0] (either 'X' or 'O')
           step 5: if not, move on to the next winning combination
        */
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]; // return the winner ('X' or 'O')
        }
    }
    return null;
}

export { calculateWinner }