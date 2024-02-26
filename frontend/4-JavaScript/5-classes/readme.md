# Week 5

### Classes

Classes is a syntax that we can use as a blueprint to create objects.

It uses the `class` keyword to declare a new class.  Note that classes will start will capital letter.

```javascript
class Car {}
```

We can create an `instance` or the object from this class by creating a variable and calling upon the class using the `new` keyword.

`new` is the keyword we use to invoke a class.

```javascript
class Car {}

const myCar = new Car()

console.log(myCar) //result: this will be the new car object from the class invocation
```

#### Constructor Function

We can have our class accept arguments by using a `constructor` function. This function is where we will receive arguments and can then add them as a property to the object that class returns by using the `this` keyword.

```javascript
class Car {
  // define params to receive args in the class
  constructor(make, model, year) {
    // then add them as props to the object that will be return
    this.make = make
    this.model = model
    this.year = year
  }
}

const myCar = new Car('Tesla', 'Model X', 2020)
```

#### ProtoType Functions

Prototype functions are functions that are built into a certain object type or class. We can create a prototype function on our class so that every object that is created from the class will have access to the function.

```javascript
class Car {
  constructor(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }

  // prototypes go here, outside of the constructor
  // we should avoid using the function keyword and arrow functions
  honk() {
    alert(`Your ${this.make} honked!`)
  }
}

const myCar = new Car('Tesla', 'Model X', 2020)
```

#### Extending Classes

We can have a class extend from another class to inherit the properties and prototypes from another class without having to re-write the logic.

We use the keyword `extends` to declare our new class is extending another class.

```javascript
class Animal {
  constructor(name, type) {
    this.name = name
    this.type = type
  }

  // prototype functions
  talk(saying) {
    console.log(`${this.name} says: ${saying}`)
  }
}

// make another class that extends Animal
class Fish extends Animal {}

const fishy = new Fish()
```

#### Super

`super` is the keyword we can use when extending a class to invoke the constructor method from the class that is being extended. When we invoke `super` we will pass the arguments to the parent classes constructor method.

```javascript
class Animal {
  constructor(name, type) {
    this.name = name
    this.type = type
  }

  talk(saying) {
    console.log(`${this.name} says: ${saying}`)
  }
}

class Fish extends Animal {
  // constrcutor for the fish class to accept arguments
  constructor(name) {
    // invoke super to call the parent classes constructor
    super(name, 'Fish')
  }
}

const fishy = new Fish('fishy')

// we can now use the talk prototype method from the Animal class on the fishy instance
fishy.talk('bubble bubble')
```

### Closures

A `closure function` is a function that is returned from another function. The inner function that is returned will rely on data that is declared in the outer functions scope.

Here is an example.

```js
function counter() {
  // Local variable to the counter function
  let count = 0

  // The closure function that is returned that will rely on data from the counter functions scope
  function addOne() {
    return (count += 1)
  }

  // Return the inner 'addOne' function
  // It's important to note that we DO NOT invoke the 'addOne' function because we want to return the function itself
  return addOne
}
```

We can now create what are called `snapshots` of the closure function. When a function forms a closure, it has access to all of its local variables and the lexical environment. The lexical scope that the function has access to is the `snapshot`.

`lexical scope` - This is where we determine a variables or functions scope based solely on its position in our code.

We can create the snapshot like this.

```js
const countOne = counter()
```

`countOne` is now a function. It's easy to think that it is now just the `addOne` inner function that gets returned from `counter`. The `countOne` function now retains a reference to the variables that were declared inside of the lexical scope of the `counter` function.

So we can invoke this snapshot multiple times to increment the `private` count variable.

```js
countOne()
countOne()
countOne()
```

We can also create a brand new `snapshot`.

```js
const countTwo = counter()
```

Then we can use the new snapshot multple times. The `count` variable in the `countTwo` will not be the same variable we refer to in `countOne`.

```js
countTwo()
countTwo()
countTwo()
```

Resources:

- Classes:
    - <a href="https://javascript.info/class">Syntax</a>
    - <a href="https://www.freecodecamp.org/news/javascript-classes-how-they-work-with-use-case/">Architecting classes</a>
    - <a href="https://javascript.info/class-inheritance">Class Inheritance</a>
    - <a href="https://javascript.info/class">Deep Dive</a>  
- Closures:
    - <a href="https://dmitripavlutin.com/javascript-closure/">Overview</a>  
     - <a href="https://www.youtube.com/watch?v=FZZPAWaWJpI">Deep Dive</a>
