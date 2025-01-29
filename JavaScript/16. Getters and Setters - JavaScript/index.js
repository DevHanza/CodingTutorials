const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

// getters => access properties
console.log(person.fullName);

// setters => change (mutate) them
person.fullName = "Jhon Smith"
console.log(person);