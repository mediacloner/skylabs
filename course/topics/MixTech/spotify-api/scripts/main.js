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
