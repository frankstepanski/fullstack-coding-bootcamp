// const and primitive data types (primitive data types are strings, numbers, booleans, null, undefined)
const age = 30;
age = 31; // => TypeError: Assignment to constant variable.

// const with non-primitive data types (non-primitive data types are objects, arrays, functions)
const grades = [80, 90, 100]; // 3 elements (indexs of  0, 1, 2)
grades[0] = 95; // => [95, 90, 100]
grades = "frankie" // => TypeError: Assignment to constant variable.

// Arrays and Functions

// Array Syntax
const _arr1 = [1, 2, 3, "a", "b", "c", true, false, true, false];
const _arr2 = ["a", "b", "c", "d", "e"]; // reference last element with _arr2[_arr2.length - 1]
const _arr3 = [true, false, true, false, true];

console.log(_arr1[5]); // "c" - reference the fifth element in the array
console.log(_arr1.length); // 10 - get the length of the array
console.log(_arr1[_arr1.length - 1]); // gets the last element in the array

// Array Methods (mutator methods)
const arr = [1, 2, 3, 4, 5];
console.log(arr.push(6)); // [1, 2, 3, 4, 5, 6] // adds element to end of array and returns the new length
console.log(arr.pop()); // [1, 2, 3, 4, 5] // removes last element and returns the removed element
console.log(arr.shift()); // [2, 3, 4, 5] // removes first element and returns the removed element
console.log(arr.unshift(1)); // [1, 2, 3, 4, 5] // adds element to beginning of array and returns the new length
console.log(arr.splice(2, 1)); // [1, 2, 4, 5] // removes elements from array and returns the removed elements
console.log(arr.reverse()); // [5, 4, 2, 1]
console.log(arr.concat([6, 7, 8, 9, 10])); // [5, 4, 2, 1, 6, 7, 8, 9, 10]

// Non mutator methods
console.log(arr.includes(3)); // false
console.log(arr.join(",")); // "1,2,4,5"

/* 
   Iterator methods
   Each method loops through the array and performs the callback function on each element
   All iterator methods take a callback function as an argument
   The callback function takes in three arguments: element, index, array
*/

// without iterator methods
const arr2 = [9, 3, 2, 1, 14];
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

// forEach - does not return anything
const arr3 = [1, 2, 3, 4, 5];
arr3.forEach(function (element) {
    console.log(element);
});

// using arrow function instead
const arr4 = [1, 2, 3, 4, 5];
arr4.forEach((element, index) => console.log(`Element ${index}: ${element}`));

// map - returns a new array with same length as original array (never modifies original array)
const arr5 = [1, 2, 3, 4, 5];
const arr6 = arr5.map(element => element * 2); // multiplies each element by 2
console.log(arr6);

// filter - returns a new array with elements that pass the test
const arr7 = [1, 2, 3, 4, 5];
const arr8 = arr7.filter(element => element % 2 !== 0); // checking for odd numbers
console.log(arr7);

// find - returns the first element that passes the test
const arr9 = [1, 2, 3, 4, 5];
const arr10 = arr9.find(element => element === 3); // returns 3
console.log(arr10);

// findIndex - returns the index of the first element that passes the test
const arr11 = [1, 2, 3, 4, 5];
const arr12 = arr11.findIndex(element => element === 3);
console.log(arr12);

// sort - sorts the array in ascending order
const arr13 = [1, 2, 3, 4, 5];
const arr14 = arr13.sort((a, b) => a - b);
console.log(arr14);


// functions (declaration, expression, arrow)
// function declaration:
// function delarations are hoisted in memory - you can call the function before it is declared

function add(a, b) { // arguments are the values passed; parameters are the variables (a, b)
    if (a === 5) return a; 
    return a + b; // should be numbers; return stops the function and returns the value
    console.log("Hello"); // this line will not run
}

let result = add(1, 2); // call the function and store the return value in a variable
console.log(add(1, 2)); // call the function and console log the return value

// function expression:
// function expressions are not hoisted in memory - you cannot call the function before it is declared
const add2 = function(a, b) {
    return a + b;
};

console.log(add2(10, 20));

// arrow function - shorthand for function expression
const add3 = (a, b) => {
    return a + b;
};

// more arrow function syntax examples:
// arrow function with implicit return:
const getArea3 = (width, height) => width * height;

// arrow function with implicit return and only one parameter:
const getArea4 = width => width * 2;

// arrow function with implicit return and no parameters:
const getArea5 = () => 5 * 5;

// function examples with loops and arrays:
function findIndex(array, value) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i; // stops the function and returns the index
        }
    }

    return -1; // if the value is not found
}

console.log(findIndex([1, 2, 3, 4, 5], 8));

function reverseArray(array) {

    let newArray = []; // 5, 4, 3, 2, 1

    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }

    return newArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

function removeElement(array, elem) {

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== elem) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

console.log(removeElement([1, 2, 3, 4, 5], 3));

// higher order function (HOF) example #1:
// a HOF is a function that takes in a function as an argument or returns a function
function callTwice(func) {
    // ... do something
    func(); // run the rollDie function 
    func(); // run the rollDie function
}

// callback function - is a function that is passed into another function as an argument
function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6
    console.log(roll);
}    

// calling HOF with callback:
callTwice(rollDie);

// higher order functions (HOF) example #2:
function executeSum(num1, num2, callback) {

    const sum = callback(num1, num2); // return the sum
    return sum;
}

// callback function:
function sum(a, b) {
    return a + b;
}

// calling HOF with callback:
console.log(executeSum(1, 2, sum));

// combining functions, arrays, and loops
function createEvenArray(array) {

    let newArray = [];
   
    for (let i = 0; i < array.length; i++) {
       
        if (array[i] % 2 === 0) {
            newArray.push(array[i]);
        }
    }

    if (newArray.length === 0) {
        return "Array is empty";
    }

    return newArray;
}

console.log(createEvenArray([1, 2, 3, 4, 5]));
