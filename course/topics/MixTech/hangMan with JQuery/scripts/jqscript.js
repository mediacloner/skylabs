

$(document).ready(function () {

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
        $("#panel").append(newGame.print());
        $("#attemps").append(attemps);
        
    });


});