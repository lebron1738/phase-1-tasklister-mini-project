
const newTaskForm = document.getElementById("create-task-form");
const taskList = [];

newTaskForm.addEventListener("submit", (event) => {

  event.preventDefault();

  const input = document.getElementById("new-task-description");

  taskList.push(input.value.trim());

  newTaskForm.reset();

  console.log(taskList);

  toDoList(taskList);
});

function toDoList(todo) {
  const tasks = document.querySelector("#tasks");

  tasks.innerHTML = "";

  todo.forEach((toDo) => {
    console.log(toDo);

    const li = document.createElement("li");
    li.textContent = toDo;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";

    deleteButton.addEventListener("click", () => {
      li.remove();

      taskList.splice(taskList.indexOf(toDo), 1);

      
    });

    li.appendChild(deleteButton);

    tasks.appendChild(li);
  });
}
