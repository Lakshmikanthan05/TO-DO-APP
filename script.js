

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listcontainer");

function addTask() {
  if (inputBox.value === '') {
    alert("you must write something!!");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("I");
    span.innerHTML = "EDIT ";
    li.appendChild(span);
    let span1 = document.createElement("span");
    span1.innerHTML = "DELETE";
    li.appendChild(span1);

  }
  inputBox.value = "";
  saveData();
}
listContainer.addEventListener("click", function (e) {

  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }

  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
  else if (e.target.tagName === "I") {
    let lk = e.target.parentElement.innerText;
    let part = lk.slice(0,-11);
    inputBox.value = part;
    e.target.parentElement.remove();
    saveData();
  }

}, false);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML)
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
