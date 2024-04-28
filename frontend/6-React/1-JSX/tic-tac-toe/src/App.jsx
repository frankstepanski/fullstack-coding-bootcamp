import Game from './components/Game.jsx' 
import './App.css' /* imports CSS from App.css */

/*
 React:

   A JavaScript library for building User Interfaces (UIs)

    - Makes developing large scale applications easier
    - Provides conventions for dealing with rendering and state
    - Need a tool to scaffold your app
       - package.json => tracks dependencies
    - Based on components - splitting UI into smaller parts
      - SRA - Single Responsiblity Prinicple: should do only thing
    - JSX:
       - Syntactic Sugar for writing JavaScript in HTML  
       - Gets compiled to JS before rendering
       - Every components returns JSX
       - All tags must have closing tag
       - Required one "parent" tag (e.g. <>, <div>, etc)
    - Components:
       - Just a function that returns JSX
       - Always exported to be used in another component
       - Usually in one file (.js, .jsx)
       - Parent => Child
       - Component tree starts with App component
       - To execute a component is: <Component />

Vite:
    - Tool for scaffolding React apps; similar to create-react-app
    - create-react-app: No longer supprted by Facebook
    - Faster than create-react-app because it uses ES modules (instead of Webpack)

*/

function App() {

  return (
    <>
      <Game />
    </>
  )
}

export default App
