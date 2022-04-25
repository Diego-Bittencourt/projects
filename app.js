var user_input = document.getElementById("insertText");
const button = document.getElementById("insertButton");
const list = document.getElementById("goal-list");

console.log(user_input);

button.addEventListener("click", addList);

function addList() {
    let new_item = document.createElement("p");
    list.appendChild(new_item);
    new_item.innerText = user_input.value; //The .value didn't work after the getElementById, but it worked after the variable's name.
    user_input.value = "";
}

var clicked_item = document.getElementsByTagName("p");
clicked_item.addEventListener("click", remove(element))
