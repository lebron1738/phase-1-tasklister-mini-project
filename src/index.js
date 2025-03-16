document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function (deed) {
    deed.preventDefault();

    const newTaskDescription = document.getElementById("new-task-description");
    if (newTaskDescription.value.trim() !== "") {
      const newTask = document.createElement("li");
      newTask.innerText = newTaskDescription.value;

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "x";
      deleteButton.addEventListener("click", () => {
        taskList.removeChild(newTask);
      });
      newTask.appendChild(deleteButton);

      taskList.appendChild(newTask);
      newTaskDescription.value = "";
    }
  });
});
