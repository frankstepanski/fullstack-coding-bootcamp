import React, {useState, useRef} from 'react';

function Greeting({ 
        message, 
        anotherMessage, 
        changeMessage, 
        changeAnotherMessage,
        temperature,
        changeTemperature
}) {

  /*
      useRef Hook

      - useRef is a way to create and manage references to DOM elements
      - works the same way as native DOM methods
      - DO NOT use any native DOM API methods in a React app
      - This is also commonly used if you are creating 'uncontrolled forms'

      uncontrolled form

      - If you are not using a state variable and a corresponding onChange event
        handler to conrol the value of the input field.
      - You will need a way to reference the value of a input field

      controlled form

      - A more common approach to controlling input fields with state and an
        onChange event handler
      - When the user types in an input field, the state is updated for each
        keystroke.
      - With big forms it can have many state variables.
      - Most big forms are handled by Form libraries such as
         - React Hook Form
         - Formik
         - rc-field-form
         - React Final Form

  */

  const [weather, setWeather] = useState('')

  const inputRef = useRef(null);

  // creating a wrapper function around the state "setter" function
  const anotherMessageClickHandler = () => {
        // processing
        // validation
        // other stuff
        changeAnotherMessage(inputRef.current.value);
  }
 
  return (
      <>
        <h4>{message}</h4>
        <h4>{anotherMessage}</h4>

        <button className = "message"
              onClick={() => changeMessage("new message")}>
              update message
        </button>

        {/* uncontrolled form field */}
        <input type="text" 
               placeholder = "enter text" 
               ref={inputRef} 
        />

        <button className = "newMessage"
              onClick={anotherMessageClickHandler}>
              update another message
        </button>

        <h4>the temperature is {temperature}</h4>

        <button className = "temperature"
              onClick={() => changeTemperature(76)}>
              change temperature
        </button>

        <h4>the weather is {weather}</h4>

        {/* controlled form field */}
        <input type="text" 
               placeholder = "change the weather" 
               value={weather} 
               onChange={(e) => setWeather(e.target.value)}       
               
        />

      </>
  );
  
}

export default Greeting;