// Typescript Decorators
// https://youtu.be/celifYagZi4

function myLogger(target: Function) {
    console.log('Logging..')
    console.log(target);
}


@myLogger
class User{
    name: string = "Jhon";
    age: number = 28;

    constructor() {
        console.log("User class constructor called...")
    }
}