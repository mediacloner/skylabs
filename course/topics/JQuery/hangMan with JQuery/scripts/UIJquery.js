

$(document).ready(function () {

    start();

    function start() {
      $("section").hide();
      $("#start").show();
    }

    $("#play").click(function(e) {
      e.preventDefault();
        $("#start").hide();
        $("#defineWord").show();
    });
    
    $("#startGame").click(function (e) {
        e.preventDefault();
        var attemps = $("#attempsInput").val();
        var secretWord = $("#secretWordInput").val();
        $("#attemps").append(attemps);
        $("#defineWord").hide();
        $("#playingGame").show();
        playingGame(secretWord, attemps);
        $("#panel").append(newGame.print());
    });

    $("#try").click(function (e) {
        
        e.preventDefault();
        var vowelWord = $("#vowelWord").val();
        var result = newGame.try(vowelWord);

       


        
        $("#panel").empty();
        $("#attemps").empty();


        $("#panel").append(newGame.print());
        $("#attemps").append( newGame.attemps);

        
    })

    
});

function resultLose(state) {
  $("#playingGame").hide();
  $("#resultLose").show();
  var sw = resultSecretWord();
  if (state === 1) $("#resultLose").show("No more attemps. " + sw + " was the world.");
  if (state === 2) $("#resultLose").show("You are wrong with the word " + sw + " was the world.");
}


function resultWin(attempsVal) {


  $("#playingGame").hide();
  $("#resultWin").show();
  var sw = resultSecretWord();
 // var att = resultAttemps();
  //$("#secretWord").append();
 //$("#attemps").clear();
  $("#atts").append(attempsVal);
 // $("#attemps").append(attempsVal);
 // $("#secretWord").clear();

  $("#secretWord").append(sw);


}
