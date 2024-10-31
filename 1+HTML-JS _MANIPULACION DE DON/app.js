const taskForm = document.getElementById("task-form");

const taskList = document.getElementById("task-list");

loadTasks()

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
   
    const taskInput = document.getElementById("task-input")

    const task = taskInput.value;
    console.log(task);

    if (task) {
        taskList.append(createTaskElement(task));
        storeTaskInLocalStorage(task);
        taskInput.value = "";
    }
});

function createTaskElement(task) {
    const li = document.createElement("li");
    li.textContent = task;
    liappend(createbutton("❌"), "delete-btn", createbutton"✏️","edit-btn",);
    return li;
}

function createbutton(text,className) {
    const btn = document.createElement("span");
    btn.textContent = text;
    btn.className = className;
    return btn;
}

taskList.addEventListener("click", (event) => {
    if(event.target.classList.contais("delete-btn")){
        deleteTask(event.target.parentElement);
    } else if (event.target.classList.contais ("edit-btn"))
    
    }
});

function deleteTask(taskItem) {
    if(confirm("Esras segura /seguro de borrar este elemento?")) {
        taskItem.remove();
    }
}

function editTask(taskItem){
    const newTask = prompt("Edita la tarea:", taskItem.firstchild.textContent);
    if(newTask !== null) {
        taskItem.firstchild.textContent = newTask;
        updateLocalStorage();
    }
}

function storeTaskInLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks") || " [] ")

tasks.push(task);
loacalStorage.setItem("rasks", JSON.stringify(tasks));
}

function loadTasks() {visu
    const tasks =JSON.parse(localStorege.getItem("tasks") || " [] ");
    tasks.forEach((task) => {
    taskList.appendChild(createTaskElement(task))
    });
}

function updateLocalStorage() {
   const tasks = Array.from(taskList.querySelectorAll("li")).map( 
    (li) => li.firstChild.textContent
);
   
   localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeFromLocalStorage(taskContent) {
    const tasks = JSON.parse(localStorage.getItem("tasks") || " [] ");

    constupdateTasks = tasks.filter((task) => task !== taskContent);

    localStorage.setItem("tasks", JSON.stringify(updateTasks));
} 

const themeToggleButton = document.getElementById("toggle-theme-btn");

themeToggleButton.addEventListener("click", () => {
document.body.classList.toggle("dark-theme");
});
