// Oppgave 1
const removeBtn = document.getElementById("remove-btn");
removeBtn.addEventListener("click", removeFunction);

function removeFunction() {
  document.getElementById("remove").remove();
}

// Oppgave 2
document.getElementById("change-btn").addEventListener("click", changeFunction);

function changeFunction() {
  document.getElementById("change").replaceWith("Edited message");
}

// Oppgave 3
let inputValue = document.getElementById("input");
inputValue.addEventListener("click", inputFunction);

function inputFunction() {
  document.getElementById("input-text").replaceWith(inputValue);
}

// Oppgave 4
const myList = ["item one", "item two", "item three"];

document.getElementById("write-list").addEventListener("click", listFunction);

function listFunction() {
  let list = document.getElementById("ul");

  myList.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}

// Oppgave 5
let index = document.getElementById("select").selectedIndex;
document.getElementById("create").addEventListener("click", createText);

// Oppgave 6
// Oppgave 7
// Oppgave 8
