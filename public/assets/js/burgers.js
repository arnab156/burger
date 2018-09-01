// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-burger").on("click", function(event) {
    // alert ("we are here in burger js");
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");
    console.log("&&&&&&&&&&&&&& in public burger js"+newDevoured);

    if (newDevoured === false) {
      var newDevouredState = {
        devoured: true
      };
    } else{
      var newDevouredState = {
        devoured: false
      };
    }
    // console.log("%%%%%%%%%%%%%%%%% in public burger js: "+newDevouredState);
    // console.log("%%%%%%%%%%%%%%%%% in public burger js: "+newDevouredState.devoured);
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(function() {
        console.log("changed sleep to", newDevoured);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // console.log("new burger is: " + newBurger);
    // console.log("new burger is: " + newBurger.name);
    // console.log("new burger is: " + newBurger.devoured);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });


  app.use(express.static('public'));

  // $(".delete-burger").on("click", function(event) {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/burgers/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("deleted burger", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});
