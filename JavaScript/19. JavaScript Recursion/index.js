const countDown = (num) => {
  // log the num
  console.log(num);

  // Minus num by 1
  const updatedNum = num - 1;

  // Base Case
  if (updatedNum >= 0) {
    countDown(updatedNum);
  }
};

countDown(20);
