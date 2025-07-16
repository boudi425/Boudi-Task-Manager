let myInput = document.querySelector(".input");
let myBtn = document.querySelector(".add");
let myDivs = document.querySelector(".Tasks");
let clearBtn = document.querySelector(".Clear");

function createDiv(name) {
  let newDiv = document.createElement("div");
  newDiv.className = `Task`;
  let newSpan = document.createElement("span");
  newSpan.innerText += name;
  let newDivBtn = document.createElement("button");
  newDivBtn.innerText = "delete";
  newDivBtn.className = "delete";
  newDivBtn.addEventListener("click", function () {
    myDivs.removeChild(newDiv);
    window.localStorage.removeItem(`${name}`);
  });
  newDiv.appendChild(newSpan);
  newDiv.appendChild(newDivBtn);
  myDivs.appendChild(newDiv);
  window.localStorage.setItem(`${name}`, newDiv.innerHTML);
}

function Main() {
  for (let i = 0; i < window.localStorage.length; i++) {
    keys = window.localStorage.key(i);
    createDiv(keys);
  }
  clearBtn.addEventListener("click", function () {
    let allTask = document.querySelectorAll(".Task");
    allTask.forEach(function (e) {
      myDivs.removeChild(e);
    });
    window.localStorage.clear();
  });
  myBtn.addEventListener("click", function () {
    createDiv(myInput.value);
    myInput.value = "";
  });
}

Main();
