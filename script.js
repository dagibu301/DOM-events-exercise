const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const liItems = document.getElementsByTagName("li");
const items = ul.getElementsByTagName("li");

for (let i = 0; i < liItems.length; i++) {
  const button = document.createElement("button");
  button.innerHTML = "Delete";
  liItems[i].appendChild(button);
}

inputLength = () => {
  return input.value.length;
};

createListElement = () => {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.innerHTML = "Delete";
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  li.appendChild(button);
  input.value = "";
};

addListAfterClick = () => {
  if (inputLength() > 0) {
    createListElement();
  }
};

addListAfterKeypress = (event) => {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
};

onClickList = (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  } else if (e.target.tagName === "BUTTON") {
	console.log(e.target);
	e.target.parentNode.remove();
  }
};

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", onClickList);
