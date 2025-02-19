const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

let savedItems = JSON.parse(localStorage.getItem("items")) || [];

function addTask(){
    const taskText = taskInput.value.trim();

    if(taskText !== ""){
        savedItems.push(taskText);
        localStorage.setItem("items", JSON.stringify(savedItems));
        taskInput.value = "";    
        
        loadItems();
    }
}

function loadItems(){

    taskList.innerHTML = "";

    savedItems.forEach(itemText => {
        const taskItem = document.createElement("li");

        const taskTextSpan = document.createElement("span");
        taskTextSpan.textContent = itemText;
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";

        removeButton.addEventListener("click", function(){
            const texto = taskTextSpan.textContent.trim();
            savedItems = savedItems.filter(item => item !== texto);
            localStorage.setItem("items", JSON.stringify(savedItems));
            taskItem.remove(); 
        })

        taskTextSpan.addEventListener("click", function () {
            taskTextSpan.classList.toggle("done");
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