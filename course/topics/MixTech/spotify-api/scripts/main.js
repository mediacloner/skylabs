$("button").click(function(e) {
  e.preventDefault();

  let query = $("input").val();

  spotifyApi.searchArtists(query, resHTML, resError);

  function resHTML(obj) {
    let resultHTML = "";

    obj.forEach(e => {
      if (typeof e.images[0] === "undefined") {
        resultHTML +=
          '<a href="#" class="list-group-item list-group-item-action list-group-item-success" id="' +
          e.id +
          '"><img class="img64" src="images/noimageicon_64x64.png"" alt="" srcset=""><p class="textList">' +
          e.name +
          "</p></a>";
      } else {
        resultHTML +=
          '<a href="#" class="list-group-item list-group-item-action list-group-item-success" id="' +
          e.id +
          '"><img class="img64" src="' +
          e.images[0].url +
          '" alt="" srcset=""><p class="textList">' +
          e.name +
          "</p></a>";
      }
    });
    $(".result").empty();
    $(".result").append(resultHTML);
  }

  resError = result => {
    // console.log(result);
  };
});

$(document).on("click", "a", function() {
  var id = $(this).attr("id");

  spotifyApi.retrieveAlbums(id, resHTML, resError);

  function resHTML(obj) {
    let resultHTML = "";

    obj.forEach(e => {
      if (typeof e.images[0] === "undefined") {
        resultHTML +=
          '<a href="#" class="list-group-item list-group-item-action list-group-item-success" id="' +
          e.id +
          '"><img class="img64" src="images/noimageicon_64x64.png"" alt="" srcset=""><p class="textList">' +
          e.name +
          "</p></a>";
      } else {
        resultHTML +=
          '<a href="#" class="list-group-item list-group-item-action list-group-item-success" id="' +
          e.id +
          '"><img class="img64" src="' +
          e.images[2].url +
          '" alt="" srcset=""><p class="textList">' +
          e.name +
          "</p></a>";
      }
    });
    $(".result").empty();
    $(".result").append(resultHTML);
  }

  resError = result => {
    // console.log(result);
  };
});

$(document).on("click", "a", function() {
  var id = $(this).attr("id");

  spotifyApi.retrieveTracks(id, resHTML, resError);

  function resHTML(obj) {
    let resultHTML = "";
    console.log(obj);

    obj.forEach(e => {
      // console.log(e.preview_url);
      resultHTML +=
        '<a href="#" class="list-group-item list-group-item-action list-group-item-success" id="' +
        e.id +
        '"><p class="textList">' +
        e.name +
        '</p><div class="player"><audio controls><source src="' +
        e.preview_url +
        '" type="audio/mp3"></audio></div></a>';
    });
    $(".result").empty();
    $(".result").append(resultHTML);
  }

  resError = result => {
    // console.log(result);
  };
});

$(document).on("click", "a", function() {
  var id = $(this).attr("id");

  spotifyApi.retrieveTrack(id, resHTML, resError);

  function resHTML(obj) {
    console.log(obj.external_urls.spotify);
    window.open(obj.external_urls.spotify);
  }
  resError = result => {
    // console.log(result);
  };
});
