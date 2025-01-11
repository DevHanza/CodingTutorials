import { describe, test, it, expect } from "vitest";
import { max, fizzBuzz, calculateAverage, factorial } from '../src/intro';

describe('max', () => {
    it('should return the first arguement if it is greater.', () => {
        // AAA
        // Arrange
        const a = 2;
        const b = 1;

        // Act
        const result = max(a, b);

        // Assert
        expect(result).toBe(2);
    });
    it('should return the second arguement if it is greater.', () => {
        expect(max(1, 2)).toBe(2);
    });
    it('should return the second arguement if it is greater.', () => {
        expect(max(1, 1)).toBe(1);
    });
});

describe('FizzBuzz', () => {
    it("should return FizzBuzz, if the arg is divisble by 3 & 5", () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })

    it('should return Buzz, if the arg is only divisible by 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    })

    it('should return Fizz, if the arg is only divisible by by 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    })

    it('should return the arg as a string, If the arg is not divisible by 3 or 5.', () => {
        expect(fizzBuzz(1)).toBe('1');
    })
});


describe("calculateAverage", () => {
    it('should return NaN if given an empty array', () => {
        expect(calculateAverage([])).toBeNaN();
    })

    it('should calculate the average of an array with a single element', () => {
        expect(calculateAverage([1])).toBe(1);
    })

    it('should calculate the average of an array with multiple elements.', () => {
        expect(calculateAverage([1,2])).toBe(1.5);
    })
})

// Exercise: Testing Factorial

// 0! = 1
// 1! = 1
// 2! = 2 x 1
// 3! = 3 x 2 x 1

describe("findFactorial", () => {
    it('should return 1 if the given is 0', () => {
        expect(factorial(0)).toBe(1);
    })
    it('should return 1 if the given is 1', () => {
        expect(factorial(1)).toBe(1);
    })

    it('should return 2 if the given is 2', () => {
        expect(factorial(2)).toBe(2);
    })

    it('should return 6 if given 3', () => {
        expect(factorial(3)).toBe(6);
    })
    it('should return 24 if given 4', () => {
        expect(factorial(4)).toBe(24);
    })

    it('should return undefined if given a negative number', () => {
        expect(factorial(-1)).toBeUndefined();
    })
});

