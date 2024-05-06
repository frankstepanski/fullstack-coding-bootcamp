import React from 'react';

/*
    Using Props
         - Props passed to a component can be referenced in 2 ways:
            - ComponentName(props) => referencing the Props object
            - ComponentName({props property}) => destructing the Props object

   Using the props object instead of destructuring it:
     function Greeting(props) {
          props.message => props.property
          props.anotherMessage => props.property
          props.thirdMessage => props.property
    }
*/

function FormalGreeting(
    { 
        message, // destructuring the props object of props.message
        anotherMessage, // destructuring the props object of props.anotherMessage
        thirdMessage, // destructuring the props object of props.thirdMessage
        temperature // destructuring the props object of props.temperature
   })
   {
 
  return (
      <>
        <p>{message}</p>
        <p>{anotherMessage}</p>
        <p>{thirdMessage}</p>
        <p>{temperature}</p>
      </>
  );
  
}

export default FormalGreeting;