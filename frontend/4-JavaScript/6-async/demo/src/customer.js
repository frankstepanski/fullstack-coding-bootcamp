class Customer {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    yearsToRetirement() {
        return 65 - this.age;
    }
}

module.exports = { Customer };