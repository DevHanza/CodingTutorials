function getUserGender(name) {
  return new Promise(function (resolve, reject) {
    const url = `https://api.genderize.io?name=${name}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => reject(data));
  });
}

function showData(data) {
  console.log(data);
}

function onError(err) {
  console.log("Error");
}

getUserGender("Jhon").then(showData).catch(onError);
