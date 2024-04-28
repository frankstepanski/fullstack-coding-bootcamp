import Game from './components/game.jsx' 
import './App.css' /* imports CSS from App.css */

/*
 
 Props:
  - props are immutable- they cannot be changed
  - props are passed from parent to child
  - props can be literal data, variables, functions or even other components

  State:
  - state is mutable- it can be changed
  - state is defined normally in a functional component using the useState hook
  - class components have a built in state object but are deprecated

  Hooks:
  - hooks are functions that allow us to use state and other React features in functional components
  - useState: hook that allows us to use state in functional components
  - useEffect: hook that allows us to use lifecycle methods in functional components

*/

function App() {

  return (
    <>
      <Game />
    </>
  )
}

export default App
