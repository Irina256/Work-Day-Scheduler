
  var date = document.querySelector("#currentDay");

  date.textContent =moment().format("dddd, MMMM Do");  

  $(".list-group").on("click", "p", function() {
    var text = $(this)
      .text()
      .trim();
      var textInput = $("<textarea>")
  .addClass("form-control")
  .val(text);
  $(this).replaceWith(textInput);
  textInput.trigger("focus");


  });
  $("button").on("click", function() {
    var textArea = $(this).closest(".row").find("textarea")
    var textInput = textArea.val().trim();

    var textP = $("<p>")
        .addClass("text-left mt-3 ml-3")
        .text(textInput);
    textArea.replaceWith(textP);
     localStorage.setItem("tasks", JSON.stringify(text));


});
     localStorage.setItem("tasks", JSON.stringify(text));
