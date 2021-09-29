var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// on a button click, create a task
var taskFormHandler = function (event) {
    // prevent page from reloading when clicking button
    event.preventDefault();
    // retrieve forms values upon submission
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    // get value for task type
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    // check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    };
    // reset form
    formEl.reset();
    // package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    // send i as an argument to createTaskEl
    createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
    // create a DOM element object
    var listItemEl = document.createElement("li");
    // style it
    listItemEl.className = "task-item";
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // style it
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
}

// event listener
formEl.addEventListener("click", taskFormHandler);