import fetch from 'node-fetch';

/* *************************************************************

   Asynchronous JavaScript
   
   Asynchronous coding, enables the program to start a task and continue with other operations while
   waiting for the task to complete. This allows for improved performance and responsiveness, 
   as the program can execute other tasks or respond to user input without waiting for the completion
   of time-consuming operations. 
   
   In traditional synchronous programming, tasks are executed one after the other in
   a sequential manner, where the program waits or "blocks" for each task to complete before moving on to
   the next one.  This can lead to inefficiencies, especially when dealing with tasks that involve waiting
   for I/O operations or external resources (e.g. API).

   Asynchronous coding typically involves the use of callbacks, promises, or async/await constructs in
   various programming languages. 
   
   - Callbacks: In this approach, you define a callback function that is invoked once a task is completed
   - Promises:  You create a promise object that represents the eventual result of an asynchronous task. 
                 You can attach success and error handlers to the promise, which are invoked when the task 
                 completes or encounters an error.
   - Async/await: This is a syntactic sugar that allows you to write asynchronous code that looks like
                   synchronous code. It is built on top of promises. The "async" keyword is used to define
                   an asynchronous function, and the "await" keyword is used to pause the execution of
                   the function until a promise is resolved.

************************************************************* */

// synchronous code (goes in order, never skips a line, goes back a line(s))
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');

// asynchronous code
setTimeout(() => {
     console.log('Hello World');
}, 2000); // runs once after 2 seconds (setInterval runs every 2 seconds)

// synchronous code
console.log('Hello World');
console.log('Hello World');

function setTimeOut() {
  
    // first - synchronous code
    console.log('I am at the beginning of the code');
    
    // third - asynchronous code
    setTimeout(() => {
      console.log('I am in the setTimeout callback function')
    },500);
  
    // second - synchronous code
    console.log('I am at the end of the code');
}

setTimeOut();


function createNativePromise() {

    // Promise - class that gets instantiated to an object that wraps asynchronous code
    const promise = new Promise((resolve, reject) => {
            // asynchronous code:
            setTimeout(() => {
                // promise is resolved after 2 seconds
                resolve('I am a resolved promise!!!');
                //reject('I am a rejected promise!!!');
            }, 2000);
        }
    );

    promise.then((data) => { // when the promise is resolved, the then method is called
        console.log(data);
    })
    
    // promise chaining
    promise.then((data) => { // when the promise is resolved, the then method is called
        console.log(data);
    })
    .catch((error) => { // when the promise is rejected, the catch method is called
        console.log(error);
    });
}

createNativePromise();

// using async/await with fetch api
async function createPromiseFetchAsyncAwait() {

    // a promise is returned from the fetch function:
    try {
        // performing a GET fetch request
        const response = await fetch('https://api.github.com/users/github');
        const data = await response.json();
    
        console.log(data);

    } catch (error) {
        console.log(error);
    }

}

await createPromiseFetchAsyncAwait();

// using promises with fetch api
function createPromiseFetchNative() {

    // a promise is returned from the fetch function:
    fetch('https://api.github.com/users/github')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

createPromiseFetchNative();