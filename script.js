const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function addTask(){
    const taskText = taskInput.value.trim();

    if(taskText !== ""){
        
        const taskItem = document.createElement("li");

        const taskTextSpan = document.createElement("span");
        taskTextSpan.textContent = taskText;
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";

        removeButton.addEventListener("click", function(){
            taskItem.remove();
        })

        taskTextSpan.addEventListener("click", function () {
            taskTextSpan.classList.toggle("done");
        });
        

        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

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