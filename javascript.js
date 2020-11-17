
  var date = document.querySelector("#currentDay");

  date.textContent =moment().format("dddd, MMMM Do");  

 


var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));

  // if nothing in localStorage, create a new object to track all task status arrays
  if (!tasks) {
    tasks = {
     time: [],
     task: [],
   
    };
  }
  var tasks =[];
  tasks.push(JSON.parse(localStorage.getItem("task")));
localStorage.setItem("task", JSON.stringify(tasks))

tasks.forEach(myfunction);
function myfunction(tasks){
  $("textarea").innerHTML= JSON.parse(localStorage.getItem("task"));
console.log(tasks)
}

    


    }
  
  
  $("button").on("click", function() {
     
    var time = $(this).closest(".row").find(".hour").attr("id").replace("hour-","");
      var text = $(this).closest(".row").find("textarea").val().trim();
    
   

    var taskObj={
      time:time,
      task:text
    };
  events(taskObj);
  });
  
  function events(taskObj){
    var tasks =[];

        tasks = JSON.parse(localStorage.getItem("task"))||[];
    tasks.push(taskObj);



localStorage.setItem("task", JSON.stringify(tasks));



};
loadTasks();

   