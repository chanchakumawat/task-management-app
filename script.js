let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(){
let taskList = document.getElementById("taskList");
taskList.innerHTML = "";

tasks.forEach((task,index)=>{
let li=document.createElement("li");

li.innerHTML=`
${task}
<button onclick="deleteTask(${index})">Delete</button>
`;

taskList.appendChild(li);
});

localStorage.setItem("tasks",JSON.stringify(tasks));
}

function addTask(){
let taskInput=document.getElementById("taskInput");

if(taskInput.value===""){
alert("Enter Task");
return;
}

tasks.push(taskInput.value);
taskInput.value="";

renderTasks();
}

function deleteTask(index){
tasks.splice(index,1);
renderTasks();
}

renderTasks();
