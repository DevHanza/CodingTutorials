// const input = document.createElement("input");

// input.placeholder = "TO DO";
// document.body.appendChild(input);

// const button = document.createElement("button");
// button.innerText = "ADD";

// document.body.appendChild(button);

// button.addEventListener("click", () => {
//   const div =  document.createElement('div')
//   div.innerText = input.value
//   document.body.appendChild(div)
//   input.value = ''
// });

// rewrite it with semantic HTML Tags

const form = document.createElement("form");
document.body.appendChild(form);

const input = document.createElement("input");
input.placeholder = "TO DO";
form.appendChild(input);

const button = document.createElement("button");
button.innerText = "ADD";
button.role = "ADD";
form.appendChild(button);

const ul = document.createElement("ul");
document.body.appendChild(ul);

// remove elments from the DOM
const removeElement = (el) => {
  el.remove();
};

form.onsubmit = (event) => {
  event.preventDefault();

  const li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML = input.value;

  li.onclick = removeElement.bind(null, li);

  input.value = "";
};

// Adding Styles

document.body.style.padding = "16px";
input.style.marginRight = "8px";
document.body.style.backgroundColor = "lightgreen";

document.body.setAttribute("class", "blue");

console.log(document.body.attributes);

document.getElementsByClassName("blue");
document.getElementsByTagName("li");
document.querySelector(".blue");
document.querySelectorAll("li");
