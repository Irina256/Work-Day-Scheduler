
  var date = document.querySelector("#currentDay");

  date.textContent =moment().format("dddd, MMMM Do");  

 
let tasks=[];



  
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
    tasks.push(JSON.parse(localStorage.getItem("task")));
localStorage.setItem("task", JSON.stringify(tasks))

    tasks = JSON.parse(localStorage.getItem("task"))||[];
    tasks.push(taskObj);





localStorage.setItem("task", JSON.stringify(tasks));



};

  // var display =function(){
  //   tasks = JSON.parse(localStorage.getItem("task"))||[];
  //   $("textarea").innerHTML = tasks;

  // }
   