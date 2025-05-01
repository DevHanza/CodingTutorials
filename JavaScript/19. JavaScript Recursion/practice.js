// TASKS

// 1. Create a recursive function that counts from 1 to 10, make sure you include a base case.

function counter(num) {
  console.log(num);

  const updatedNum = num + 1;

  if (updatedNum <= 10) {
    counter(updatedNum);
  }
}

counter(0);

