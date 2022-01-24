const todos = [];

var task = document.querySelector("#task");

var myNodelist = document.getElementsByTagName("li");
var i;

for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("task").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  store(inputValue);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
  showTheToastMessage();
}

// Execute a function when the user releases a key on the keyboard
task.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("liveToastBtn").click();
  }
});

//Toast message function
function showTheToastMessage() {
  // Get the snackbar DIV
  var toast = document.getElementById("snackbar");

  // Add the "show" class to DIV
  toast.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}

/* Todolist to localStorage */
function store(item_id) {
  todos.push(item_id);
  localStorage.setItem("item", JSON.stringify(todos));
}

function getStore() {
  localStorage.getItem("item");
}
