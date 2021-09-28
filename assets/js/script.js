var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// on a button click, create a task
var createTaskHandler = function (event) {
    // prevent page from reloading when clicking button
    event.preventDefault();
    // retrieve forms values upon submission
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    // get value for task type
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    // create a DOM element object
    var listItemEl = document.createElement("li");
    // style it
    listItemEl.className = "task-item";
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // style it
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);
    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("click", createTaskHandler);