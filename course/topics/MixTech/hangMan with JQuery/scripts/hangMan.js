function Game(word, attemps) {
    var word = word.toLocaleLowerCase()
    this.attemps = attemps;
    if (word && attemps) {
        var correctLetters = []
        this.try = function (string) { 
            var self = this  // Clousure
            if (string) { //filtar por si fuera diferente a un string, si no devuelve  "NO MORE ATTEMPS, GAME OVER"
                this.attemps = attemps--

                if (attemps >= 0) return (string.length > 1) ? allWord(string) : letter(string)  // si hay intentos y dependiendo de tamaño te vas a una funcion u otra

                return resultLose(1);
            }

            return console.error("no letter inputed")
            //Clousure
            function letter(string) {
                var string = string.toLocaleLowerCase()  //  toLowerCase() no es igual?

                if (word.includes(string)) { // si la palabra incluye algo del string
                    var currentWordUser = word.split("").map(function (el) {  //  paso a array, lo mapeas, pregunto si el elemento mapeado es el correcto o no y hace un join
                        return (correctLetters.includes(el)) ? el : "_"       // y hace un join.  
                    }).join("")

                      

                    correctLetters.push(string)

                    if (currentWordUser == word) {
                        var attempsNow = attemps;
                        attemps = 0
                        return resultWin(attempsNow);
                    }
                    console.log("Nice! " + string + " is correct letter! ")
                    
                    
                }
                  attemps--;
                if (attemps < 1) {
                  return resultLose(1);
                }

                console.log("Nop... Try again...")

            }

            function allWord(string) {
                var string = string.toLocaleLowerCase()

                if (string === word) {
                    var attempsNow = attemps;
                    attemps = 0
                    return resultWin(attempsNow);
                }
                console.log("Too bad... you " + ((attemps >= 0) ? ("only have " + attemps) : "lost noob"))
                return resultLose(2);
            }
        }
        this.print = function () {
            var arrWor = word.split("")  // genera los espacios?
            var pannel =  arrWor.map(function (el) {
                return (correctLetters.includes(el)) ? el : "_"   // cambia el espacio por la letra. Igual que le linea 21
            }).join(" ")

            if (pannel.indexOf("_") < 0)  resultWin(newGame.attemps);
            
            return pannel;

        }
      
    } else {
        return console.error("no word or attemps inputed")
    }

    ;
}

function playingGame(secretWord, attemps) {
  this.secretWord = secretWord;
  this.attemps = attemps;
  newGame = new Game(secretWord, attemps);
}

function resultAttemps() {
    console.log(attemps)
    return attemps
}
function resultSecretWord() {
     console.log(secretWord);
  return secretWord;
}