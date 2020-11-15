
  var date = document.querySelector("#currentDay");

  date.textContent =moment().format("dddd, MMMM Do");  

  $("textarea").on("click", function() {
    
//     var index = $(this)
//     .closest(".list-group-item")
//     .index();
//     tasks[status][index].text = text;
// saveTasks();
});


  $("button").on("click", function() {
    var textArea = $(this).closest(".row").find("textarea")
    textInput = textArea.val().trim();


    saveTasks();

});
var saveTasks= function(){
    localStorage.setItem("tasks", JSON.stringify(textInput));

}