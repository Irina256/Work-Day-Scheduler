var date = document.querySelector("#currentDay");

date.textContent = moment().format("dddd, MMMM Do");
var tasks;



var loadTasks = function () {
  tasks = JSON.parse(localStorage.getItem("task"));

  // if nothing in localStorage, create a new object to track all task status arrays
  if (!tasks) {
    tasks = []

  }

  function myfunction(task) {

    $("#textarea-" + task.time).html(task.task);
  }
  tasks.forEach(myfunction);



}


$("button").on("click", function () {

  var time = $(this).closest(".row").find(".hour").attr("id").replace("hour-", "");
  var text = $(this).closest(".row").find("textarea").val().trim();



  var taskObj = {
    time: time,
    task: text
  };
  events(taskObj);
});

function events(taskObj) {
  tasks.push(taskObj);



  localStorage.setItem("task", JSON.stringify(tasks));



};
loadTasks();