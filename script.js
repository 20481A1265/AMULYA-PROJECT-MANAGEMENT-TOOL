function addTask() {
    event.preventDefault();

   
    
    var ProjectTitle= document.getElementById("name").value;
    var BatchNumber = document.getElementById("tname").value;
    var Description = document.getElementById("tdesc").value;

    
    var taskElement = document.createElement("table");
    taskElement.className = "task";

    
    var taskContent = 
    `
    <tr>
    <th>Project Title</th>
     <th>Batch Number </th>
     <th>Project Description</th>
     
     
     </tr>
        <tr>
        <td>${ProjectTitle} </td>
        
        <td>${BatchNumber}  </td>
        <td>${Description}</td>
        
        <td><button class="delete-task">Done</button></td>
        </tr>
    `;

    taskElement.innerHTML = taskContent;


    var taskList = document.getElementById("task-list");
    taskList.appendChild(taskElement);


    document.getElementById("form").reset();

 
    var deleteButton = taskElement.getElementsByClassName("delete-task")[0];
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(taskElement);
    });
}


document.getElementById("form").addEventListener("submit", addTask);