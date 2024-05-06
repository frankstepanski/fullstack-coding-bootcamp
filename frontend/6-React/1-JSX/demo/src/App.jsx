import React from 'react'
import Greeting from './components/Greeting'
import FormalGreeting from './components/FormalGreeting'
import './App.css'

/*
    Rules of JSX
    
    1- JSX is an syntax extension for JavaScript to write HTML-like code in JS
    2- Is transformed into regular JS before execute in the browser
    3- Behind the scenes it is transformed to a bunch of React.createElement()
    4- JavaScript expressions are embedded within {}
    5- CSS properties are camelCased, not using "-" dashes
    6- The "class" attribute is now "className" in React
    7- All tags must be self-closing
    8- JSX must have one root element

    Rules of Props
    
    1- Anytime you are passing props that are not a string, you must wrap in {} 
    2- You can pass any type of data as a prop (arrays, objects, functions).
    3- If you pass a prop without a value, that value will be set as true. 
    4- React puts all props on an object and passes that object to the compoment.
    5- That object is called props.

    Props object

    1- Built-in to every component you create
    2- Passing props automatically attached it to the Props object
    3- It becomes a property on the Props object
    4- You destruct the props object to access the prop value by {propname, propname2, etc}

*/

function App() {
  
  const name = "tom";

  const title = "Welcome to the new blog";
  const likes = 50;
  const person = { name: 'yoshi', age: 30 };
  const link = "http://www.google.com"

  const message = "this is a greeting";
  const anotherMessage = "this is another greeting";

  // This is where your JSX starts in any component
  return (
    <>
      <h1>Hello {name}</h1>
      <p>Start editing to see some magic happen :)</p>
      <Greeting />
      <Greeting />

      <h1>{title}</h1>
      <p>Liked {likes} times</p>
 
      <p>{person.name }</p>
      <p>{[1,2,3,4,5]}</p>
      <p className="green">{(Math.random() * 10).toFixed(2)}</p>
      <a href={link}>Google Site</a>

      <ul>
      {
          ["eat", "sleep", "work"].map((todo,index) => {     
              return (
                <li key={index}>{todo}</li>
              )
          })
      }
      </ul>

      {/* Passing props to a component */}
      <FormalGreeting 
         message = {message}
         anotherMessage = {anotherMessage} 
         thirdMessage = "Hi" /* passing a string */
         temperature = {88} /* passing a number */
      />

    </>
  )
}

export default App
