// Lesson: Writing your first tests
export function max(a, b) {
  // if (a > b) return a;
  // else if (b > a) return b;
  // return a;

  return (a > b) ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

// TDD - Test Driven Development Practice

export function calculateAverage(numbers) {
  if (numbers.length === 0) return NaN;
  const sum =  numbers.reduce((sum, current) => current + sum, 0);
  return sum / numbers.length;
}

// Exercise: Testing Factorial

// 0! = 1
// 1! = 1
// 2! = 2 x 1
// 3! = 3 x 2 x 1

export function factorial(num) {
    if (num < 0) return undefined;
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}