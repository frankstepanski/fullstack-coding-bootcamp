const {  Customer } = require('../src/customer')

test('getName returns the name of the customer', () => {
    const customer = new Customer('John', 30);
    expect(customer.getName()).toBe('John'); // will be true
    expect(customer.getName()).not.toBe('Jane'); // will be true
})

test('getAge returns the age of the customer', () => {
    const customer = new Customer('John', 30);
    expect(customer.getAge()).toBe(30); // will be true
    expect(customer.getAge()).not.toBe(40); // will be true
})

test('yearsToRetirement returns the years until the customer retires', () => {
    const customer = new Customer('John', 30);
    expect(customer.yearsToRetirement()).toBe(35); // will be true
    expect(customer.yearsToRetirement()).not.toBe(40); // will be true
})
