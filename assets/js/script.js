var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// on a button click, create a task
var createTaskHandler = function () {
    // create a DOM element object
    var listItemEl = document.createElement("li");
    // style it
    listItemEl.className = "task-item";
    // add text
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);