const _ = require('lodash');

const myArray = [
    "Water",
    "Chicken",
    "Banana",
    "Banana",
    "Cake",
    "Water",
]

const myNewArray = _.chunk(myArray, 3);
console.log(myNewArray)

const differenceArray1 = _.difference(myArray, ["Water", "Banana"]);
console.log(differenceArray1);

const differenceArray2 = _.difference(myArray, ["Cake", "Water"])
console.log(differenceArray2);


const joinedList = _.join(myArray, " | ");
console.log(joinedList);

const noCakeBanana = _.without(myArray, "Cake", "Banana")
console.log(noCakeBanana);

const noDuplicates = _.uniq(myArray)
console.log(noDuplicates);