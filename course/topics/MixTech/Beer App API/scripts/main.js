$("button").click(function(e) {
  e.preventDefault();

  var query = $("input").val();

  $.ajax({
    url: "http://quiet-inlet-67115.herokuapp.com/api/search/all?q=" + query,
    success: function(result) {
      console.log(result);

      var resultHTML = "";

      result.forEach(function(e) {
        resultHTML +=
          '<li><a href="#" id="' + e.id + '">' + e.name + "</a></li>";
      });

      console.log(resultHTML);

      $("ul").empty();
      $("ul").append(resultHTML);
    }
  });
});

$(document).on("click", "a", function() {
  var id = $(this).attr("id");
  console.log(this);

  $.ajax({
    url: "https://quiet-inlet-67115.herokuapp.com/api/beer/" + id,
    success: function(resultDes) {
      console.log(resultDes);
      var title = resultDes.name;
      
      var imgURL;
      var description; 

      $(".modal .modal-title").html(title);
      
      if ("description" in resultDes) { 

        description = resultDes.description;

      }

      else{
        description = 'We don\'t have any information about this beer';
      }
      
      $(".modal-body p").text(description);


       if ("labels" in resultDes) { 
         imgURL = resultDes.labels.medium;
         var img = '<img id="theImg" src="' + imgURL + '" />';
         //$(".image").empty();
         $(".image").html(img);
       } 
       
       else if ("images" in resultDes) {
         imgURL = resultDes.images.medium;
         var img = '<img id="theImg" src="' + imgURL + '" />';
         $(".image").empty();
         $(".image").prepend(img);
       } 
       
       else {
         var img = '<img id="theImg" src="images/beerDefault.png" />';
         $(".image").empty();
         $(".image").prepend(img);
       }

      $("#myModal").modal("show");
    }
  });
});
