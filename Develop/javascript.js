
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


    localStorage.setItem("tasks", JSON.stringify(textInput));

});


var saveTasks= function(){
tasks = JSON.parse(localStorage.getItem("tasks"));      
        // if nothing in localStorage, create a new object to track all task status arrays
        if (!tasks) {
          tasks = {
            task: [],
                     };
        }
        $.each(tasks, function(list, arr) {
            console.log(list, arr);
            // then loop over sub-array
           
          });
        };
        
        saveTasks();
