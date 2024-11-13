const taskInput = document.getElementById("task");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", (event) => {
  const taskValue = taskInput.value.trim();

  const taskItem = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskValue;
  taskItem.appendChild(taskSpan);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);

  taskInput.value = "";

  deleteButton.addEventListener("click", function () {
    taskList.removeChild(taskItem);
  });

  event.preventDefault();
});
