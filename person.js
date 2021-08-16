class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }

    greeting() {
        console.log(`My name is ${this.name} and age ${this.age}`)
    }
}

const person1 = new Person('Akhilesh',25)
person1.greeting()
