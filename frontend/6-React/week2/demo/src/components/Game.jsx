import React, {useState} from 'react'
import { calculateWinner } from '../utils/helpers'
import Board from './board.jsx'

/*
    Component Composition:
        - components can be composed of other components
        - this allows us to create reusable components
        - this allows us to create components that are easier to read and maintain
*/

const styles = {
    width: '200px',
    margin: '20px auto',
};

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true) 
    const winner = calculateWinner(board)

    const handleClick = i => {
        // create a shallow copy of the board state
        const boardCopy = [...board]
        // If user clicks an occupied square or if game is won, return
        if (winner || boardCopy[i]) return
        // Put an X or an O in the clicked square
        // mutate the boardCopy array
        boardCopy[i] = xIsNext ? 'X' : 'O'
        // update the board state with the mutated boardCopy array
        setBoard(boardCopy)
        // update the xIsNext state
        setXisNext(!xIsNext); // flip the boolean value
    }

    return (
        <>
            <Board squares = {board} onClick={handleClick}/>
            <div style={styles}>
                <button onClick={() => setBoard(Array(9).fill(null))}>
                    Start Game
                </button>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
            </div>
        </>
    )
}

export default Game;