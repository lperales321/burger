// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-it").on("click", function(event) {
      var id = $(this).data("id");
  
      var newBurger = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurger
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".submit-it").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log( $('#burgerName').val());
        var newBurger = {
            name: $('#burgerName').val().trim(),
            devoured: 0
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
  });
  