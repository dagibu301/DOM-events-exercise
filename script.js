const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

inputLength = ()=> {
	return input.value.length;
}

createListElement = ()=> {
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

addListAfterClick = ()=> {
	if (inputLength() > 0) {
		createListElement();
	}
}

addListAfterKeypress = (event)=> {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);