# Week 3

### Functions

Functions are reusable pieces of code that we can use to execute code blocks whenever they are invoked.

Functions can be written using either a function declaration or an expression.

A function declaration:

```js
function nameOfFunction() {
  //Code to execute
}
```

A function expression:

```js
const nameOfFunction = function() {
  //Code to execute
}
```

Functions are invoked by referencing the function name and pairing it with a pair of parentheses `()`. Think of these parentheses as the button you are pushing to invoke the function. For example, to invoke our above written function we would simply type:

```js
nameOfFunction()
```

> This would invoke the function and execute any code we have written inside of it.

Functions can be set up to receive parameters, or values that will change depending on when the function is invoked. For example, to write a simple function that will add two numbers together we can do the following:

```js
function addTwo(num1, num2) {
  return num1 + num2
}
```

> This function will take in two numbers and return their sum. We do not know what the values for `num1` and `num2` will be for each invocation, so the parameters act as placeholders.

To invoke this function we could do the following:

```js
addTwo(2, 2) //Returns 4
addTwo(3, 3) //Returns 6
addTwo(5, 5) //Returns 10
```

> This is how we make our functions reusable. When you invoke a function, the values passed to it are called arguments, they are used in the function in place of parameters.

We use the `return` keyword to determine the value that is returned by the function. A function can return any data type, or even another function. When we invoke a function, it becomes equal to its return value and can be assigned to a variable. For example:

```js
let a = addTwo(2, 2) //Our variable a is now equal to 4 and can be used later
let b = addTwo(3, 3) //Variable b is now equal to 6
```

> The return keyword prevents any code below it from executing. It effectively kicks us out of our function. Make sure your return statement is the last thing you want to have happen in a function.


```js
let name = 'Andrew'
let name2 = 'Jonathan'

function sayHi(person) {
  return `Hello, ${person}!`
}

//What will be the value of the following invocations?

let hiAndrew = sayHi(name)
let hiJonathan = sayHi(name2)
let hiBob = sayHi('Bob')
``` 

### Callbacks

A callback is a function that is passed as an argument to another function.

```js
function callback() {
  console.log('I am a callback')
}
//Our initial function

function cbRunner(cb) {
  //Notice, cbRunner takes in a callback function as its parameter
  //it then invokes that function
  cb()
}

cbRunner(callback)
//Prints 'I am a callback' to the console
```

> This is obviously a very primitive example but does a good job at illustrating the callback pattern. 

```js
function greeting(name){
  return 'Hello, ' + name
}

function consoleLogResult(cb){
  console.log(cb())
}

consoleLogResult(() => return greeting('Andrew'))
//Prints 'Hello, Andrew' to the console
```

There are several elements:

1.  Our `greeting` function takes a name and returns a greeting specific for that person.
2.  Our `consoleLogResult` function takes a callback and prints its result to the console.
3.  Because we need to pass an argument to our callback function (`greeting`), we need to invoke it as part of the argument passed to `consoleLogResult`. Here we are using the arrow function syntax to do so.

> Functions such as `consoleLogResult` whose purpose is to execute their callback functions and do something with their value are known as _higher order functions_.

### Arrays

Can be thought of as a list.

An array can contain any data type or even a mix of data types.

Contained witin brackets `[]` with each value separated by a comma.

  ```js
  const arrayOfNumbers = [1, 2, 3, 4, 5]
  const arrayOfStrings = ['brown', 'purple', 'green', 'yellow']
  ```

Values in an array are referenced using _bracket notation_.  This means, to access a specific value in an array, we provide the following: `Array[index]`
For example: to access the string `brown` in the array `arrayOfStrings` I would reference it as `arrayOfStrings[0]` because arrays are zero-indexed, meaning the first item in the array is located at index 0.

#### Accessing values in an array

Values inside of arrays are accessed primarily using **bracket notation**. This allows us to reference a specific index, or location within an array. To do this, we use the following format: `array[index]`

Arrays are zero indexed, meaning that the first index, or location, inside of an array is 0. 

```js
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

> `numArr[0]` is equal to 1 because 1 is the first item in the array. `numArr[5]` is equal to 6 because 6 is the 5th index on the array.

You can also access values on an array by passing in a variable. This can be useful if you don't know exactly which index you will need to access at different times.

```js
const namesArr = ['Andrew', 'Jonathan', 'Josh', 'Brandon']

const index = 0

console.log(namesArr[index])
//This will print 'Andrew' to the console.

//However, if we change the value of index later in the file,
//we can access another value.

index = 2
console.log(namesArr[index])
//Because the value of index is now 2, this will print 'Josh' to the console
```

#### Editing arrays

Arrays have built in functions to easily edit their contents. They will all allow you to edit arrays as the data you are dealing with changes.

All of these functions are invoked by chaining them onto an array variable in the following format: `array.function()`. 

- `.push()` allows you to add an item to the end of an array.

  ```js
  const namesArr = ['Andrew', 'Jonathan', 'Josh']
  namesArr.push('Brandon')

  //namesArr now looks like this: ['Andrew', 'Jonathan', 'Josh', 'Brandon']
  ```

- `.pop()` removes the last item from an array.

  ```js
  const namesArr = ['Andrew', 'Jonathan', 'Josh']
  const finalName = namesArr.pop()

  //namesArr now looks like this: ['Andrew', 'Jonathan']
  //.pop can be assigned to a variable which will be the item removed.
  //In this example finalName is now equal to 'Josh'
  ```

- `.shift()` removes the first item from an array.

  ```js
  const namesArr = ['Andrew', 'Jonathan', 'Josh']
  const firstName = namesArr.shift()

  //namesArr now looks like this: ['Jonathan', 'Josh']
  //Similar to .pop, .shift can be assigned to a variable.
  //firstName will be equal to 'Andrew'
  ```

- `.unshift()` allows you to add an item to the front of an array.
  ```js
  const namesArr = ['Andrew', 'Jonathan', 'Josh']
  namesArr.push('Brandon')
  //namesArr now looks like this: ['Brandon', 'Andrew', 'Jonathan', 'Josh']
  ```
- `.slice()` makes a shallow copy of the array that it's chained on to. It takes two arguments, the starting and ending indices of the array you want to copy.
  ```js
  const namesArr = ['Andrew', 'Jonathan', 'Josh']
  const someNames = namesArr.slice(0, 1)
  //someNames now looks like this: ['Andrew', 'Jonathan']
  ```
  > Note: this does not change the original array.
- `.splice()` is the most dynamic of all for editing arrays. It takes 3 arguments:

  1.  The index at which we want to begin editing
  2.  How many items to remove from the array
  3.  Any values to replace at that index

  ```js
  const namesArr = ['Andrew', 'Jonathan', 'Josh', 'Brandon', 'Steve']
  const removedName = namesArr.splice(1, 1)
  //This will remove 1 name from the array at index 1 and assign it to the variable removedName
  //namesArr now looks like this: ['Andrew', 'Josh', 'Brandon', 'Steve']
  //removedName is equal to 'Jonathan'

  //We can continue to edit it, and even put new values in
  namesArr.splice(1, 0, 'Charles')
  //This will just insert charles at index 1.
  //namesArr will now look like this: ['Andrew', 'Charles', 'Josh', 'Brandon', 'Steve']
  ```

  > .splice() is incredibly dynamic and will be one of the most useful functions you can learn. It would be worth your time to play around with it in a repl or other project to increase your familiarity with what it can do.

#### .length

All arrays have a length property by default. As the name would suggest this returns the length of the array. Remember that while arrays are zero indexed, length is not. 

```js
const namesArr = ['Andrew', 'Jonathan', 'Josh']
console.log(namesArr.length)
//Prints 3 to the console
```

### Array Methods

A method is a function which lives on an object. 

These particular functions operate much like a `for` loop because they loop over the specified array similar to how you can use a `for` loop. The methods accept oneat least one argument, a callback function.

> Note: These array methods are called higher order functions because they
take as an argument a callback function.

#### .forEach

The .forEach array method loops over the array and performs an action for each item in the array without returning a new array. This can be useful for performing an action a set number of times or editing the values in the original array. 

The .forEach callback function will loop over the given array in a way very similar to a for loop can and accepts three arguments:

1. The individual item it is looking at, often referred to as `element` or `el`.
2. The index of the item being looked at.
3. The entire original array.

```js
const names = ['Andrew', 'Jonathan', 'Josh']
//If we simply wanted to print each of these names to the console, we could do this:

names.forEach(function(element, index, array) {
  console.log(element)
})

//However, the usefulness of this is limited.  Let's imagine we wanted to find out who was cool, but didn't need a new array.

names.forEach(function(element, index, array) {
  if (element === 'Andrew') {
    names[index] = element + ' is cool.'
  } else {
    names[index] = element + ' is not cool.'
  }
})

//names now looks like this:
//['Andrew is cool', 'Jonathan is not cool', 'Josh is not cool']
```

#### .map

The .map method behaves very similarly to .forEach and its callback function even takes the same arguments (element, index, and array) - the major difference being that it is used to create a new array instead of simply performing an action for each item in the array. The .map method returns a new array of the same length as the original array and generally will change some aspect of the values in the original array.

```js
const nums = [1, 2, 3, 4, 5]

const numsPlusOne = nums.map(function(element, index, array) {
  //.map loops over the nums array and looks at each item
  //On the first run element = 1, index = 0, and array = [1,2,3,4,5]
  //On the second run element = 2, index = 1, and array = [1,2,3,4,5]
  //element and index are placeholder values for each element and index in the array
  return element + 1
  //Our return value is what will be added to the new array, meaning in this case we will add each number + 1
})

//numsPlusOne is equal to [2,3,4,5,6]
//The original nums array has not been changed
```

```js
const names = ['Andrew', 'Jonathan', 'Josh']

const whoIsCool = names.map(function(element, index, array) {
  if (element === 'Andrew') {
    return element + ' is super cool.'
  } else {
    return element + ' is not cool.'
  }
})

//After this runs, whoIsCool will look like this:
//['Andrew is super cool', 'Jonathan is not cool', 'Josh is not cool']
```

Notes:

1.  Since .map does not affect the original array, it **always** needs to be assigned to a new variable.
2.  The array returned by .map will **always** be the same length as the original array. If you do not provide a valid return as part of your callback function, that element will be `undefined`.
3.  You do not have to provide all 3 arguments to your callback function. If you only need the element, that's all you have to pass to the callback function. Just remember that the first argument passed is the element, the second is the index, and the third is the array, regardless of what you name each of them.

#### .filter

True to its name, .filter allows us to filter items out of an array based on a set condition. It's callback function accepts the same arguments as .map and .forEach but is explicitly looking for either a `true` or `false` value to be returned. If the callback function returns `true`, that element will be added to the new array, otherwise it will be ignored. 

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Imagine we only want the even numbers from this array

const evens = nums.filter(function(element, index, array) {
  if (element % 2 === 0) {
    return true
  }
})
```

#### .reduce

.reduce allows us to take many values and reduce them down to a single value. It is slightly different from the others we have looked at today because it takes in two arguments, a callback function and an initializer. The initializer is important because it tells .reduce what data type we are expecting to return from the function. If no initializer is provided, the first item in the array will be used as the initial starting value in the function. 

Furthermore, the callback function accepts one extra argument, the accumulator. The accumulator is used to keep track of our value as we loop through the array. The simplest functionality of .reduce is to sum an array of numbers but the possibilities are endless. 

```js
const nums = [1, 2, 3, 4, 5]

const sumNums = nums.reduce(function(acc, element, index, array) {
  return (acc += element)
}, 0)
```

Let's look at what our values will look like for each loop:

1. On the first run:

- the `acc` is equal to the initializer, `0`
- `element` is the first item in the array, `1`
- We `return 0 + 1`, so `acc` becomes `1` for the next loop.

2. On the second loop:

- `acc` is equal to `1`, `element` is equal to `2`
- We `return 1 + 2`, so `acc` becomes `3`

3. Once all of the loops have completed, the final value of `acc` is assigned to `sumNums`

- If we console log `sumNums`, we will see `21`.

```js
const names = ['Jonathan', 'Josh', 'Brandon']

const andrewsFriends = names.reduce(function(acc, element, index, array) {
  if (index === names.length - 1) {
    return acc + 'and ' + element
  } else {
    return acc + element + ', '
  }
}, "Andrew's friends are ")
```

In this example, our initializer is the beginning of a string `"Andrew's friends are "`. With each loop, we are pulling a name from the names array and adding it to this string. Once we hit the last item (where `index` is equal to the length of the array minus one) we finish off the string with `'and'`. 

Notes:

1.  Reduce always returns a new value and therefore needs to be assigned to a variable.
2.  When beginning to write .reduce functions, it can be easy to forget either the accumulator or the initializer. Remember, whatever the first argument you pass to the callback function will be the accumulator, regardless of what you name it.

### Objects
  - A collection of **key value pairs** with each key representing the name of a piece of data and the value being the value of that key.
  - Keys are also referred to as properties
  - Contained within a set of curly brackets `{}`
  - Keys are declared inside of an object by using a colon `:`
  - Each key value pair is separated by a comma `,`
  - Key value pairs can contain any data type

    ```js
    const person = {
      name: 'Andrew',
      age: 27,
      married: true,
      friends: ['Jonathan', 'Josh', 'Spencer'],
    }
    ```
  - Values in objects are usually referenced using _dot notation_.
    _ For example: to access the `name` property on the object `person`, I would reference it as `person.name` which would give me the string `'Andrew'`
    _ New key value pairs can be added to an existing object using dot notation. For example, to add a `pets` property to our `person` object we can just say:
    `js person.hasPets = false`

#### Accessing values on objects

Values on objects can be accessed using either dot or bracket notation.

- Dot notation is the most common way to access properties on an object. To access a value on an object, you reference `object.key`. An example:

  ```js
  const person = {
    name: 'Andrew',
    age: 27,
    married: true,
    friends: ['Jonathan', 'Josh', 'Brandon'],
    favorites: {
      food: 'Jambalaya',
      car: 'Land Rover',
      animal: 'Duck',
    },
  }

  console.log(person.name)
  //Prints 'Andrew' to the console

  //If you have objects nested inside of objects, you can chain dot notation together
  console.log(person.favorites.car)
  //Prints 'Land Rover' to the console
  ```

- Bracket notation is useful when you need to dynamically access keys on an object. To access a value on an object you reference `object[key]`. For example:

  ```js
  const person = {
    name: 'Andrew',
    age: 27,
    married: true,
    friends: ['Jonathan', 'Josh', 'Brandon'],
    favorites: {
      food: 'Jambalaya',
      car: 'Land Rover',
      animal: 'Duck',
    },
  }

  console.log(person['name'])
  //Prints 'Andrew' to the console

  const myKey = 'favorites'
  console.log(person[myKey]['animal'])
  //Prints 'Duck' to the console
  ```

> NOTE: When using bracket notation, you can either provide a string of the key name, or a variable.

#### Adding keys to an object

New key/value pairs can be added to existing objects using either dot or bracket notation.

- Using dot notation:

  ```js
  const person = {
    name: 'Andrew',
    age: 27,
    married: true,
    friends: ['Jonathan', 'Josh', 'Brandon'],
    favorites: {
      food: 'Jambalaya',
      car: 'Land Rover',
      animal: 'Duck',
    },
  }

  person.hasPets = false
  //This will add a key of hasPets to the person object and give it a value of false.

  //This works with nested objects as well.
  person.favorites.place = 'St. Petersburg'
  //This will add a place property to the nested favorites object and give it the value of 'St. Petersburg'

  //Don't forget what we learned above,
  //if there are arrays as properties on and object, the functions we learned apply.

  person.friends.push('Charles')
  //This will push the value 'Charles' onto the friends array on the person object.
  //It is incredibly common to see data nested in this fashion, so you should become comfortable with seeing it
  ```

- Using bracket notation:

  ```js
  //This code will behave identically to the code above
  const person = {
    name: 'Andrew',
    age: 27,
    married: true,
    friends: ['Jonathan', 'Josh', 'Brandon'],
    favorites: {
      food: 'Jambalaya',
      car: 'Land Rover',
      animal: 'Duck',
    },
  }

  person['hasPets'] = false
  //This will add a key of hasPets to the person object and give it a value of false.

  //This works with nested objects as well.
  person['favorites'].place = 'St. Petersburg'
  //This will add a place property to the nested favorites object and give it the value of 'St. Petersburg'
  //Notice you can combine bracket and dot notation

  const myKey = 'friends'

  person[myKey].push('Charles')
  //This will push the value 'Charles' onto the friends array on the person object.
  ```

Resources:
- Template literals: 
  - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">Definition</a>
  - <a href="https://www.w3schools.com/js/js_string_templates.asp">Examples</a>
- Arrays: 
  - <a href="https://www.youtube.com/watch?v=55l-aZ7_F24">Definition</a>
  - <a href="https://javascript.info/array">Documentation</a>
  - <a href="https://www.freecodecamp.org/news/data-structures-101-arrays-a-visual-introduction-for-beginners-7f013bcc355a/">Visual guide</a>
  - <a href="https://www.w3schools.com/js/js_array_methods.asp">Array methods overview</a>
  - <a href="https://www.freecodecamp.org/news/the-javascript-array-handbook/">More on methods</a>
- Functions:
   - <a href="https://javascript.info/function-basics">Basics</a>
   - <a href="https://javascript.info/function-expressions">Expressions</a>
   - <a href="https://javascript.info/arrow-functions-basics">Arrow functions</a>
   - <a href="https://www.sitepoint.com/callbacks-javascript/">Callbacks</a>
- Objects:
    - <a href="https://javascript.info/object">Object documentation</a>
    - <a href="https://www.w3schools.com/js/js_objects.asp">Quick summary</a>
    - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects">Working with objects</a>
    - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#enumerating_properties">Looping through objects</a>
- Additional Resources
    - <a href="https://www.youtube.com/watch?v=nDPv8R2lFa4&t=692s">Deep Dive</a>