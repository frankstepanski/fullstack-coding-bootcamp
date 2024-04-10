// Ways to create objects in JavaScript

// 1- object literal (most common way to create an object):
const person = {
    name: "John",
    age: 30,
    greet: function() {  // method (inside an object literal)
        //const name = "Frank"
        console.log("Hello, my name is " + this.name);
    }
};


// nested object literal (very common)
const spaceship = {
    pilot: {
        name: 'elon musk',
        age: 42,
        favoriteFood: ['steak', 'ice cream']
    },
    engine: {
        model: 'Falcon 1',
        fuel: 'liquid oxygen',
        speed: '7,500 m/s'
    }
};

console.log("pilot name", spaceship.pilot.favoriteFood[0]) // spaceship[variable_name][variable_name]] 

// *** looping through objects ***
// loop through object (for...in loop) - properties
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Object.keys() returns an array of the object's keys
for (let key of Object.keys(person)) {
    console.log(key + ": " + person[key]);
}

// Object.entries() returns an array of the object's key-value pairs
for (let entry of Object.entries(person)) {
    console.log(entry[0] + ": " + entry[1]);
}

// 2- function return object literal:

function createPerson(name, age) {

    // .. other code..

    return {
        name, // name: name
        age: age
    };
}

const person1 = createPerson("John", 30);

// 3- constructor function (not as common as object literal - legacy code):
function Customer(name, address, city, state, zip) {
    this.name = name;
    this.address = address;
    this.city = city
    this.state = state;
    this.zip = zip
}

const customer = new Customer("John Wall");
console.log(customer);

// 4- class (ES6) - syntactic sugar for a constructor function):
class Widget {
    constructor(name, price, available) {
        this.name = name;
        this.price = price;
        this.available = available;
    }
}

// creating an instance of a class which is an object
// product1 is the object (instand of the Widget class)
const product1 = new Widget("socket", 10.99, true); 
const product2 = new Widget("wrench", 0.99, false); 
console.log(product1);

delete product1.available; // delete a property

console.log(product1['name']); // bracket notation - used when the property name is dynamic
console.log(product1.name); // dot notation

// inheritance via a class
// parent class (or base class)
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
// child class
class Magazine extends Book {
        constructor(title, author, year, month) {
            super(title, author, year); // call the parent constructor
            this.month = month;
        }
}

const mag = new Magazine('Mag One', 'John Doe', '2013', 'Jan');


