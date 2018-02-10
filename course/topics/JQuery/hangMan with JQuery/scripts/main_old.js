


function Game(word, attemps) {
    var attemps;
    var word = word.toLocaleLowerCase()
    if (word && attemps) {
        var correctLetters = []
        this.try = function (string) { 
            var self = this  // Clousure
            if (string) { //filtar por si fuera diferente a un string, si no devuelve  "NO MORE ATTEMPS, GAME OVER"
                attemps--

                console.log( 'try attemps: ' + attemps)

                if (attemps >= 0) return (string.length > 1) ? allWord(string) : letter(string)  // si hay intentos y dependiendo de tamaño te vas a una funcion u otra

                return resultLose(); //console.error("NO MORE ATTEMPS, GAME OVER")
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
                        attemps = 0
                        return resultWin(attemps);//return "You WIN! the Word is " + word
                    }


                    console.log("Nice! " + string + " is correct letter! ")
                    //return attemps + ") " + self.print()
                    return updateGame (attemps,  self.print());

                }

                console.log("Nop... Try again...")
                //return attemps + ") " + self.print()
                return updateGame(attemps, self.print());
            }

            function allWord(string) {
                var string = string.toLocaleLowerCase()

                if (string === word) {
                    attemps = 0
                    return resultWin();//return "You WIN! the Word is " + word
                }
                console.log("Too bad... you " + ((attemps >= 0) ? ("only have " + attemps) : "lost noob"))
                return resultLose(2);//return attemps + ") " + self.print()  // ERROR: no se puede continuar después de dar un nombre erroneo.
            }
        }
        this.print = function () {
            var arrWor = word.split("")  // genera los espacios?

            return arrWor.map(function (el) {
                return (correctLetters.includes(el)) ? el : "_"   // cambia el espacio por la letra. Igual que le linea 21
            }).join(" ")
        }
    } else {
        return console.error("no word or attemps inputed")
    }
}

//var newGame = new Game("Hello", 10)






