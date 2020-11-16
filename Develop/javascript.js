
  var date = document.querySelector("#currentDay");

  date.textContent =moment().format("dddd, MMMM Do");  

  


  $("button").on("click", function(event) {
     $(event.target)
    var textArea = $(this).closest(".row").find("textarea")
    textInput = textArea.val().trim();
    


    localStorage.setItem("tasks", JSON.stringify(textInput));

});

