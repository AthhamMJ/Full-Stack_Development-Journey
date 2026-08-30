const form = document.getElementById("ddl");
const input = document.getElementById("ddinput");
const list = document.getElementById("dd-ul");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    
    const tasktext = input.value.trim();
    if(tasktext === "") return;

    addTask(tasktext);
    input.value = "";
    input.focus();
});

function addTask(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
}

list.addEventListener("click", (event) =>{
    const clickElement = event.target;
    if(clickElement.tagName === "SPAN"){
        clickElement.classList.toggle("done");
    }

    if(clickElement.tagName === "BUTTON"){
        clickElement.parentElement.remove();
    }
})