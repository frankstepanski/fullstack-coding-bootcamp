import React from 'react'

/*
    Style object: 
        - style is an object that contains CSS properties
        - style objects properties are camelCased instead of hyphenated
        - the styles are locally scoped to the component (avoid class name collisions)
        - can be defined in the same file or imported from another file
*/

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '40px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}   

/*
    Square component:
        - is a child component of the Board component
        - represents a single square on the board
        - component composition: more efficient to use a component instead of repeating the same code 9 times
*/

const Square = ({ value, onClick}) => {


    return (
        <>
            <button style={style} onClick={onClick}>{value}</button>
        </>
    )
}

export default Square;