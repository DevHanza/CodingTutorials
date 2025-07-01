const sum = require('./main');

// My first JavaScript Unit Test


describe("Sum Function Tests", () => {
    
    // Check for Valid Data
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    // Check for Invalid Data

    test('Adds 1 + "hello" to return undefined', () => {
        expect(sum(1, "hello")).toBeUndefined();
    })
})



// https://youtu.be/diC9TvwXSUM