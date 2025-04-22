class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    dance() {
        console.log(`The ${this.name} says ${this.sound}.`);
    }
}

const robotJhon = new Animal("Jhon", "Hello");
robotJhon.dance();


// Inheritance 

class Dog extends Animal {
    wagTail() {
        console.log(`${this.name} is wagging the tail!`);
    }
 }

 const timmy = new Dog("Timmy", "Woof!");

 timmy.dance();
 timmy.wagTail();