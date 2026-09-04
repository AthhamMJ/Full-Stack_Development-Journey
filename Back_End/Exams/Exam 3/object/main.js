const div = document.getElementById("div");
const button = document.getElementById("getData");

const p1 = document.createElement("p");
const p2 = document.createElement("p");


button.addEventListener("click", () =>{
    const tasks = {
    id: 1,
    title: "Complete JavaScript Exam",
    status: "Pending",
    priority: "High"
    }

    showData(tasks);

    div.appendChild(p1);
    div.appendChild(p2);
});

const showData = (tasks) => {

    const {title, status} = tasks

    p1.textContent = `Task : ${title}`;
    p2.textContent = `Status : ${status}`;
}