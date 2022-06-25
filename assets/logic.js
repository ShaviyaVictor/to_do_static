var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderToDos() {

  listElement.innerHTML = "";

  for (todo of todos) {

    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);
    var linkElement = document.createElement("a");

  }

}
