const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

let savedItems = JSON.parse(localStorage.getItem("items")) || [];

function addTask(){
    const taskText = taskInput.value.trim();

    if(taskText !== ""){
        savedItems.push({text: taskText, done: false});
        localStorage.setItem("items", JSON.stringify(savedItems));
        taskInput.value = "";    
        
        loadItems();
    }
}

function loadItems(){

    taskList.innerHTML = "";

    savedItems.forEach(function (item, index) {
        const taskItem = document.createElement("li");

        const taskTextSpan = document.createElement("span");
        taskTextSpan.textContent = item.text;

        if(item.done){
            taskTextSpan.classList.add("done");
        }
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";

        removeButton.addEventListener("click", function(){
            savedItems.splice(index, 1);
            localStorage.setItem("items", JSON.stringify(savedItems));
            loadItems();
        })

        taskTextSpan.addEventListener("click", function () {
            item.done = !item.done;
            localStorage.setItem("items", JSON.stringify(savedItems));
            loadItems();
        });
        
        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);            
    }); 
}

loadItems();
addTaskButton.addEventListener("click", function(){
    addTaskButton.style.backgroundColor = "rgb(244, 227, 75)";

    setTimeout(function(){
        addTaskButton.style.backgroundColor = "rgb(255, 230, 0)"; 
    }, 200);
})
addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (e){
    if(e.key === "Enter"){
        addTask();
    }
})