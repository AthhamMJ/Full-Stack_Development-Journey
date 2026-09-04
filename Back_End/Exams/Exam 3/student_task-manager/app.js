const div = document.getElementById("window");
const input = document.getElementById("task");
const list = document.getElementById("list");
const add = document.getElementById("add")

add.addEventListener("click", () => {
    addTask(input.value);
    input.value = ""
})

function addTask(text){
    const li = document.createElement("li")
    const span = document.createElement("span")
    const completeTask = document.createElement("button")
    const deleteTask = document.createElement("button")

    span.textContent = text;
    completeTask.textContent = "Done";
    deleteTask.textContent = "Remove"

    li.appendChild(span);
    li.appendChild(completeTask);
    li.appendChild(deleteTask)
    list.append(li);
}