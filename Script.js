function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === ""){
        alert("Task Is Empty !!");
        return;
    }
    
    
    const li = document.createElement("li");
    li.style.fontSize = "16px"
    li.style.boxShadow = "4px 6px 12px rgba(0, 0, 0, 0.3);"
    li.innerHTML = `
      ${taskText}
      <button class="remove-btn" onclick="removeTask(this)">Delete</button>
    `;
    document.getElementById("taskList").prepend(li);
    taskInput.value = "";
    document.getElementById("add-s").play();
    
  }

  //Press Enter Key Function
  document.querySelector("#taskInput").addEventListener("keydown",function(){
    if(event.key == "Enter"){
      addTask()
    }
  })

  //delete function
  function removeTask(button) {
    const li = button.parentElement;
    const confirmend = confirm("Are you sure you want to delete this task ??");
    
    if(confirmend){
      li.remove();
      document.querySelector("#del-s").play()
    }
  
    }
  
  
  //Time Settigs
  const clock = document.getElementById('clock')
    setInterval(function () {
    let date = new Date()
    console.log(date.toLocaleDateString('en-US',{hour12: true}));
    clock.innerHTML = date.toLocaleTimeString();
  }, 1000);




  //For Dark Mode
  const dark_mode =  document.querySelector("#dark-mode");
  let body = document.querySelector("body");
  dark = "off"

  dark_mode.addEventListener("click",function(){
    if(dark == "off"){
      body.style.backgroundColor = "black"
      dark_mode.innerHTML = "Turn OFF"
      dark = "on"
    }
    else {
      body.style.backgroundColor = "#703ad2"
      dark_mode.innerHTML = "Dark Mode"
      dark = "off"
    }
  });

