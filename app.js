var user_input = document.getElementById("insertText");
const button = document.getElementById("insertButton");
const list = document.getElementById("goal-list");
var items = document.getElementsByTagName("span");



button.addEventListener("click", addList);

function addList() {
    if(user_input.value === "") {
        console.log("empty input") //substitute this line to a function to shake the input element
        return
    }
    let new_item = document.createElement("p")
    list.appendChild(new_item);
    console.log(user_input.value); //remove later. It's here just to test
    new_item.innerHTML = "<span>To do</span>" + user_input.value; //The .value didn't work after the getElementById, but it worked after the variable's name.
    user_input.value = "";
    for (let i = 0; i < items.length; i++) {
        items[i].onclick = list_remove;
    }
}

function list_remove(item_created) {
    let item = item_created.target;
    item.classList.add("done");
    item.innerText = "Done!";
   // item.remove(); // let's put this in stand by for a while.
   
}
