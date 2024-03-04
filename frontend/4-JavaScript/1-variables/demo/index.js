// Primitive Data Types

let message;
console.log(message); // => undefined

var name = ""; // empty string (length of 0)
var age = 0; // 0
var fName = "frank"; // 'f' 'r' 'a' 'n' 'k'
fName = 'frankie';
let age = 100;
const loveJavaScript = true;
let listOfComplaints = null;

console.log(null === undefined); // => false

console.log("My name is " + fName); // => "My name is frankie"
console.log('I am ' + age + ' years old'); // => "I am 100 years old"
console.log('It\'s ' + loveJavaScript + ', I love JavaScript'); // => "It's true, I love JavaScript"
console.log('The list of things I hate about JavaScript is ' + listOfComplaints); // => "The list of things I hate about JavaScript is null"

// modulus operator (%)
console.log(10 % 3); // => 1 (remainder of 10 / 3)
console.log(10 % 2); // => 0 (remainder of 10 / 2)
console.log(10 % 5); // => 0 (remainder of 10 / 5)
console.log(10 % 4); // => 2 (remainder of 10 / 4)

 // Primitives: Strings
let mySingleString = 'Frank'; // single quotes
let myDoubleString = "Jay"; // double quotes
let myBackString = `Stepanski`; // back ticks (aka template literals)

console.log(mySingleString);
console.log(myDoubleString);
console.log(myBackString);

// concatentation

const first = "Welcome";
const second = "to the";
const third = "jungle!";

//const welcomeStatement = first + " " + second +  " " + third; // "Welcome to the jungle!"
const welcomeStatement = `Hello, ${first} ${second} ${third}`; // "Hello, Welcome to the jungle!"

console.log(welcomeStatement);

// template literals
console.log(`10 + 25 = ${10 + 25}`); // => "10 + 25 = 35"

const firstName = 'Kyle';
const greeting = `Hi, ${firstName}!`;
console.log(greeting); // => "Hi, Kyle!"

let x = 5; let y = 4;
let solution = `The sum of ${x} and ${y} is ${x + y}.`; // => "The sum of 5 and 4 is 9."
console.log(solution);

// Conditional Operators

// = => assignment operator
// == => equality operator
// ===  => strict equality operator

// == vs ===
// == checks for equality of value
// === checks for equality of value AND type

console.log(1 == 1); // => true
console.log(1 == '1'); // => true (type coercion - JS converts the string to a number)
console.log(1 === 1); // => true
console.log(1 === '1'); // => false (no type coercion - JS does not convert the string to a number)

// != vs !==
// != checks for inequality of value
// !== checks for inequality of value AND type

console.log(1 != 1); // => false (! is the not operator)
console.log(1 != '1'); // => false (!= is really ==)
console.log(1 !== '1'); // => true (!== is really ===)

// > vs >=
// < vs <=

console.log(1 > 1); // => false
console.log(1 >= 1); // => true
console.log(1 < 1); // => false
console.log(1 <= 1); // => true

// Logical Operators

// && (and)
// || (or)
// ! (not)

console.log(4 == 4 && 5 == 5); // true && true => true
console.log(4 == 4 && 4 == 3); // true && false => false
console.log(4 == 3 && 4 == 4); // false && true => false
console.log(4 == 3 && 4 == 3); // false && false => false

console.log(4 == 4 || 5 == 5); // true || true => true
console.log(4 == 4 || 4 == 3); // true || false => true
console.log(4 == 3 || 4 == 4); // true || true => true
console.log(4 == 3 || 4 == 3); // false || false => false

console.log(!true); // => false (toggle the value of true)
console.log(!false); // => true (toggle the value of false)
