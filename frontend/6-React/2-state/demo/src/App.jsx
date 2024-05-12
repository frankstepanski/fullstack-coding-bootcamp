import { useState } from 'react'
import Greeting from './Greeting'

/*

    Hooks

    1- Functions that allow you to "hook into" React state and lifecycle features from functional components.
    2- They were introduced to enable state management, side effects, and other React features without the need for class components.
    3- Some common React Hooks include useState, useEffect, useContext, useReducer, and useRef.
    4- React Hooks have become the standard way to manage component logic in modern React applications.
    5- You can create custom Hooks to encapsulate and reuse stateful logic across components
    6- All hooks must defined at the top of the component definition

    State
    
    1- "state" refers to current values of a component and determines how the component should render and behave
    2- Stateful data can change over time due to user interactions, data fetching, or other events.
    3- When state changes, React re-renders the component tree to reflect the updated data and user interface.

    useState hook

    1- It allows functional components to manage and update their own state, which is data that can change over time.
    2- Takes an initial value as an argument and returns an array with two elements: the current state value and a function to update the state.
    3- To update the state, you call setter function and provide a new value. When the state updates, React re-renders the component to reflect the new state.
    4- State changes happen asynchronous for performance reasons. When you use the setter 
       function, it does not happen immediately. React will batch state updates when possible.
       This is also because React works with the JavaScript event loop and schedules the 
       update to occur later in the event loop after the current code execution is complete.
    5- Asynchronous state updates can lead to unexpected behavior if you rely on the current 
       state value immediately after calling a state update function. The state may not have
       updated yet in the current render cycle.

*/


function App() {
    const [message, setMessage] = useState("this is a greeting"); // creates a state variable and a setter function
    const [anotherMessage, setAnotherMessage] = useState("this is another greeting");
    const [temperature, setTemperature] = useState(70)

    const handleMessageChange = (message) => {

       /* 
          Lifting State Up Pattern

           - Define state in parent component
           - Create function to udpate state in parent
           - Pass the state and updating function to child component
           - Call the updating function in the child component

       */

      // wrapping our setter function in a function
      // this is allows use to do some 'processing' before updating the state
       setMessage(message)
    }

    const handleAnotherMessageChange = (message) => {

       setAnotherMessage(message)
    }

    return (    
        <div>
            <h1>Hello World!</h1>

            <Greeting 
                message = {message} 
                anotherMessage = {anotherMessage} 
                
                changeMessage = {handleMessageChange}
                changeAnotherMessage = {handleAnotherMessageChange}
                
                temperature = {temperature}
                changeTemperature = {setTemperature}
            />
        </div>
    )
}

export default App