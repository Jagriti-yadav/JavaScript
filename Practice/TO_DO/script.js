const taskInput = document.getElementById("taskInput");
document.getElementById("addTaskBtn").addEventListener("click",function(){
  const task = taskInput.value;
  if(task.trim()==""){
    alert("please enter a task");
    return;
  }
  const li = document.createElement("li");
  li.classList.add("task-item");
  li.textContent = task;
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
  
});

