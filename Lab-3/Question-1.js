const addItemButton = document.getElementById("add-item-btn");
const removeItemButton = document.getElementById("remove-item-btn");
const addInputButton = document.getElementById("add-input-btn");
const listInput = document.getElementById("list-input");
const list = document.getElementById("list");
const inputListContainer = document.getElementById("inputListContainer");

const addItemFromInput = () => {
	const value = listInput.value.trim();
	if (!value) {
		return;
	}
	const item = document.createElement("li");
	const span = document.createElement("span");
	span.textContent = value;
	item.appendChild(span);
	list.appendChild(item);
	listInput.value = "";
};

const removeLastItem = () => {
	if (list.lastElementChild) {
		list.removeChild(list.lastElementChild);
	}
};

const showInputField = () => {
	inputListContainer.style.display = "block";
};

addItemButton.addEventListener("click", showInputField);
addInputButton.addEventListener("click", addItemFromInput);
removeItemButton.addEventListener("click", removeLastItem);