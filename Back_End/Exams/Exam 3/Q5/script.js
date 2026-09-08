const taskJSON = `[
    {
        "id": 1,
        "title": "Learn JavaScript",
        "status": "Completed"
    },
    {
        "id": 2,
        "title": "Practice Dom Manipulation",
        "status": "Pending"
    }
]`;
const json = JSON.parse(taskJSON);

json[1]["status"] = "completed";


const div = document.getElementById("div");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");

for(let i = 0; i < json.length; i++){
    const {id, title, status} = json[i]

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p"); 
    
    p1.textContent = id;
    p2.textContent = title;
    p3.textContent = status;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
};