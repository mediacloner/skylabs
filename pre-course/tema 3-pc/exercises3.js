//    BINGO GAME! 🎲🎰 Realiza un programa que simule un Bingo.
//    Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse.
//    Durante el primer turno se mostrará un cartón con 15 números (excluyendo el 0 siempre), 
//    para pasar al siguiente turno el usuario deberá confirmar mediante confirm() 
//    visualizándose otro número, si coincide con alguno de los existentes en el cartón,
//    cambiará por una "X" o un 0.
//    El cartón se mostrará, al final de cada turno, con los cambios efectuados, indicándole al usuario
//    qué número se ha encontrado.
//    El programa deberá preguntar al usuario al inicio de cada turno si desea continuar, en caso
//    de que se continúe, seguirá el mismo patrón que hasta el momento. Por supuesto, cuando todos 
//    los números de una misma linea estén en "X", mostrará un mensaje "LINEA!", pero la ejecución seguirá,
//    el juego solo acabará cuando todos los números estén a "X".
//    Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón. 
//    Por último, deberá preguntar si desea volver a jugar.
//


function bingoGame() {

    var player1 = 'Default Player';
    var carton = {
        numeros: {
            linea: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
        },
        casillaOK: {
            linea0: [5],
            linea1: [5],
            linea2: [5]
        },
        lineaOk: 0,
        chkLineaOk: 0,
        bingo: 0,
    }


    askPlayer();
    cartonGenerator();



    function askPlayer() {
        player1 = prompt("Please, writte your user name:", "");
        alert('Wellcome ' + player1 + '!');
    }

    function random() {
        return Math.floor((Math.random() * 75) + 1);
    }

    function cartonGenerator() {

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 5; j++) {

                numRandom = random();
                carton.numeros.linea[i][j] = numRandom;
                tableCreator(numRandom, i);

            }
        }
    }
    function tableCreator(cell, num) {
        var x = document.createElement("TABLE");
        x.setAttribute("id", "myTable");
        document.body.appendChild(x);

        var y = document.createElement("TR");
        y.setAttribute("id", num);
        document.getElementById("myTable").appendChild(y);

        var z = document.createElement("TD");
        var t = document.createTextNode(cell);
        z.appendChild(t);
        document.getElementById(num).appendChild(z);
    }

}


bingoGame();
