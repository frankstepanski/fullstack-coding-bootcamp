function sayHello() {
    return "Hello!";
}

function sum(a, b) {
    return a + b;
}

function isEven(number) {
    return number % 2 === 0;
}

function isTruthy(value) {
    // !true yields false; !!true yields true
    return !!value;
}

module.exports = {
    sayHello,
    sum,
    isEven,
    isTruthy
};