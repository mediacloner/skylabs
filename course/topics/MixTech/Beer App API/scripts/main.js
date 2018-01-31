$("button").click(function(e) {
  e.preventDefault();

  var query = $("input").val();

  $.ajax({
    url: "http://quiet-inlet-67115.herokuapp.com/api/search/all?q=" + query,
    success: function(result) {
      console.log(result);

        var resultHTML = '';
        
        result.forEach(function (e) { 
              resultHTML += '<li><a href="#" id="'+ e.id + '">' + e.name + "</a></li>";
        });
        
        console.log(resultHTML); 


         $("ul").append(resultHTML);
    }
  });
});

     



 $(document).on("click", "a", function() {

   var id = $(this).attr("id");   
   console.log (this);
   
   $.ajax({
        url: "https://quiet-inlet-67115.herokuapp.com/api/beer/" + id,
        success: function(resultDes) {
            console.log(resultDes);
          var title = resultDes.name;   
          var description = resultDes.description;
          var imgURL = resultDes.labels.medium;

           $(".modal .modal-title").html(title);
            if (imgURL != "undefined") {
              var img = '<img id="theImg" src="' + imgURL + '" />';
              $(".modal .modal-body").prepend(img);
            }

           $(".modal .modal-body").html(description);
           $(".modal").modal();
           $("#myModal").modal("show");  
 
        }
    });

 });