

$(document).ready(function () {

    start();

    function start() {
      $("section").hide();
      $("#mainAnimation").show();
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
        $("#attemps").append(attemps);

        console.log ('vowel: ' + vowelWord);
        console.log('attemps: ' + attemps);
        
    })


});

function playingGame(secretWord, attemps) {
  this.secretWord = secretWord;
  this.attemps = attemps;
  newGame = new Game(secretWord, attemps);
}

function resultLose(state) {
  $("#playingGame").hide();
  $("#resultLose").show();
  if (state === 1) $("#resultLose").show("No more attemps");
  if (state === 2) $("#resultLose").show("You are wrong with the word");
}

function resultWin(attempsVal) {
  $("#playingGame").hide();
  $("#resultWin").show();
  $("#attemps").show(attempsVal);
  $("#secretWord").show(secretWord);
}

function updateGame(attemps, panel, update) {
  if (update == 1) {
    this.attemps = attemps;
    this.panel = panel;
  }

  return { attemps: this.attemps, panel: this.panel };
}

