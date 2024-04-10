const {  sayHello, sum, isEven, isTruthy} = require('../src/functions')

// each test function is a test case - tests a specific function
test('sayHello returns Hello!', () => {
    expect(sayHello()).toBe("Hello!"); // will be true
    expect(sayHello()).not.toBe("Goodbye!") // will be true
});   

test('sum returns the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3); // 1 + 2 = 3 => true
    expect(sum(1, 2)).not.toBe(4); // 1 + 2 != 4 => true
    expect(sum(1, 2)).not.toBe(5);
});

test('isEven returns true for even numbers', () => {
    expect(isEven(2)).toBe(true); // 2 is even => true
    expect(isEven(3)).toBe(false)
    expect(isEven(0)).toBe(true)
    expect(isEven(100)).toBe(true)
});

test('isTruthy returns true for truthy values', () => {
    expect(isTruthy(true)).toBe(true)
    expect(isTruthy(0)).toBe(false)
    expect(isTruthy({})).toBe(true); 
    expect(isTruthy([])).toBe(true)
});



// to run this test, run the following command in the terminal:
// npm run test
