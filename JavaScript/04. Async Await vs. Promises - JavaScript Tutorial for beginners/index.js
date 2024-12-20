function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(56);
    }, 1);
  });
}

async function start() {
  const result = await getData();
  console.log(result);
}

start();

// 2nd function

function newFunc() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Here is your data.");
    }, 1);
  });
}

async function newFuncRunner() {
  const newFuncData = await newFunc();
  console.log(newFuncData);
}

newFuncRunner();
