# Week 4

### Synchronous vs Asynchronous 

JavaScript is synchronous in nature. This means JavaScript runs code in the sequence they’re written.

Synchronous code will block further execution until it has finished what it's doing. As a result, a long-running JavaScript function will make the web app or server unresponsive until the function has finished. This can result in a terrible user experience.

To solve this, JavaScript makes certain operations asynchronous. This way, the web app or server is responsive while waiting for long-running tasks to complete.

When asynchronous Javascript was first talked about they referred to it as AJAX.  This was because the responses would come back in an XML form. The term AJAX is outdated and inaccurate since we don’t use XML anymore, but that doesn’t prevent people from misusing the term.

Nowadays the concept of asychronous coding is talked about in the same conversation as callbacks, promises and fetching data via REST APIs. 

>These topics are too many for one lesson, so an overview of how aynchronous code and promises are created will be discussed for now.

But first here is an example of what asynchronous code would be:

```js
function useSetTimeout() {
  console.log("Start!");

  setTimeout(() => {
    console.log("Inside setTimeout!");
  }, 1000);

  console.log("End!");
}

useSetTimeout();
```

Despite the fact that the setTimeout() function is invoked immediately, the callback function isn't invoked until later. That means that the setTimeout() function is an asynchronous operation. 

Let's look at another code example:

```js
function useSetTimeout() {
  console.log("Start!");

  setTimeout(() => {
    console.log("Inside setTimeout!");
  }, 0);

  console.log("End!");
}

useSetTimeout();
```

Notice that the setTimeout() function was told to wait for 0 milliseconds. Why is "End!" still printed before "Inside setTimeout!"?

The reason has to do with something called the **event loop**. The event loop is a process by which JavaScript prioritizes certain lines of code for execution. Asynchronous code is placed into a queue where it will always run after the synchronous lines of code. 

 When JavaScript is being interpreted, asynchronous operations are not executed immediately. Instead, they are placed into an event queue and executed later. Those operations will be run as soon as they can which is after the synchronous code has been run.

 Let's look at one final example:

 ```js
 console.log("Start!"); // Synchronous code

setTimeout(() => {
  console.log("Inside first setTimeout!"); // Asynchronous code
}, 0);

setTimeout(() => {
  console.log("Inside second setTimeout!"); // Asynchronous code
}, 0);

console.log("End!"); // Synchronous code
 ```

When setTimeout() is invoked, it doesn't execute the callback immediately. Instead, a new event is placed on the event queue along with the callback passed to setTimeout(). 

After the current file is done executing, the events in the queue are executed in order from oldest to newest (or first-in, first-out). As a result, the callback function passed into setTimeout() will always run after the synchronous code in the current file.

### Understanding Promises

The most popular way to manage asynchronous code in JavaScript is through an object called a **promise**. A promise can run asynchronous code and provide a set of methods that allows you to extract a single result from that code.

A JavaScript Promise is an if-else statement for the future. We don’t know whether the statement will flow into if or else until the future arrives. So promises have three states:

- Pending
- Resolved (or fulfilled)
- Rejected

All promises have the then and catch methods.

- We act on resolved promises in then.
- We can act on rejected promises in catch.

#### Chained then statements

If you return a value from a then call, you can use that value in the next then call. response.json in the Fetch API uses this feature.

```js
fetch('https://link-to-resource')
  .then(response => response.json())
  .then(data => {/* do something with data */}
```

#### One catch at the end

If an error occurs in a promise chain, the error will be passed directly into the next catch call. It will skip any then calls along the way.

This means we can handle all errors with a single catch call.

```js
promise
  .then(face => new Error('🙁')) // Throws an error
  .then(face => console.log(face)) // Skips this line
  .catch(face => console.log(face)) // Jumps to this line.
```

#### The finally method

All promises have a finally method. This method will be called after all then and catch calls.

```js
promise
  .then(/*…*/)
  .catch(/*…*/)
  .finally(/*…*/)
```

#### Creating a promise

Promises can be created naitively with a Promise constructor. Each Promise constructor contains a callback with two arguments — resolve and reject.

```js
const promise = new Promise((resolve, reject) => {
  // Do something with resolve and reject
})
```

We need to determine how to resolve or reject a promise. The easiest way is to create if/else condition inside the promise.

- If the condition returns true, we resolve the promise.
- If the condition returns false, we reject the promise.

```js
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve()
  } else {
    reject()
  }
})
```

Both resolve and reject take in a single argument. This argument goes into the then or catch call.

- Values passed into resolve goes into the next then call.
- Values passed into reject goes into the next catch call.

```js
const promise = new Promise((resolve, reject) => {
  if (condition) return resolve('😄')
  reject('🙁')
})

promise
  .then(face => console.log(face)) 
  .catch(face => console.log(face)) 
```

### Fetching Resources

There are two ways to natively fetch resources.

 - Using XMLHTTPRequest (XHR for short)
 - Using the Fetch API

Both XHR and Fetch are well-supported on all browsers.

Most developers prefer to use Fetch over XHR because it uses promises. But this difference doesn’t matter in practice because most of the time developers will use libraries to simplify both Fetch and XHR, and these libraries use Promises anyway.

>Note: You will mainly see XHR in existing codebases that have been in production for at least a few years (probably a lot longer).

### Fetch
You can send a Fetch request by writing the fetch method. The response comes back in a then method.

```js
fetch('https://link-to-resource').then(response => {
  console.log(response)
})
```

You need to treat the response before you can get the payload. In this case, the payload is hidden inside the body property.

In this case, the response also contains **JSON**. You can convert the response into JSON with `response.json``. Then you get the payload in the next then method.

```js
fetch('https://api.github.com/users/frankstepanski/repos')
  .then(response => response.json())
  .then(payload => {
    console.log(payload)
  })
```

Resources:

  - Synchronous vs Asynchronous JavaScript:
    - <a href="https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/">Examples</a>
  - REST API:
    - <a href="https://www.youtube.com/watch?v=SLwpqD8n3d0&t=8s">Explanation</a>
    - <a href="https://www.youtube.com/watch?v=-mN3VyJuCjM&t=39s">Examples</a>
  - Promises:
    - <a href="https://www.youtube.com/watch?v=RvYYCGs45L4&t=1s">Promises in 100 seconds</a>
    - <a href="https://javascript.info/promise-basics">Documentation</a>
    - <a href="https://javascript.info/promise-chaining">Chaining</a>
    - <a href="https://web.dev/promises/">Explanation with examples</a>
    - <a href="https://javascript.info/promise-api">API</a>
  - Fetch API:
    - <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">Useage</a>
    - <a href="https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data">Examples</a>