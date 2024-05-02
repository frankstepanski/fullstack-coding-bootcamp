import React, {useState, useEffect} from "react";

function UseEffectBasic() {

  const [todo, setTodo] = useState({});
  const [randomID, setRandomID] = useState(1);


  /*
      useEffect is a hook in React that allows you to perform side effects in functional components. 
      Side effects can include things like fetching data from an API, subscribing to events, 
      or updating the document title.

      You use useEffect inside a functional component to perform actions that need to happen after 
      the component has rendered or when certain dependencies have changed.

      useEffect takes two arguments: a callback function and an optional array of dependencies. 
      The callback function represents the side effect you want to perform, and the dependencies 
      determine when the effect should be triggered.

      The callback function inside useEffect will run after the component has rendered for the 
      first time and after every subsequent re-render, unless you specify otherwise by using dependencies.

      If you don't provide a dependency array, the effect will run after every render. 
      If you provide an empty dependency array ([]), the effect will run only once after the initial render.

       Flow:

       Step 1: Component initially renders
       Step 2: useEffect runs after component renders intially
       Step 3: Code in useEffect causes a state change (mutating a state variable)
       Step 4: State change causes component and children to re-render
       Step 5: User sees state chance (conditionally rendering some data)
       Step 6: useEffect may run again (if params are set)

       Component Re-rendering Due to State Change:
        - React renders the component (re-runs) and updates what it displays
          in the browser only what changes, not everything
        - React looks at its Virtual DOM and the actual DOM to see any differences
        - Virtual DOM == Actual DOM 
  */

  // note: useEffect runs inside a callback function
  useEffect(() => {
    
    let URL = `https://jsonplaceholder.typicode.com/todos/${randomID}`

    fetch(URL)
        .then((response) => response.json())
        .then((data) => setTodo(data)) // state change => trigger re-render
        .catch ((error)=> console.log(error))
 
     console.log("rendering", URL)

  // useEffect will execute after initial render and whenever randomID changes
  }, [randomID]); 

  const forceRender = () => {

      setRandomID(Math.floor(Math.random() * (10 - 1 + 1) + 1));
  }

  console.log(randomID)
  return (
      <>
        <h2>Todo</h2>
        <p>title: {todo.title}</p>
        <button onClick = {forceRender}>force re-render</button>
      </>
    );
}

export default UseEffectBasic;