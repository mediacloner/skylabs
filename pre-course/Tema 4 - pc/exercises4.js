// a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, muestres por pantalla 
// los numeros unidos por parejas(1 - 2, 2 - 3, 3 - 4...), además, cada elemento de la pareja deberá estar multiplicada por 2.

function showNums() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var countIter = 0;
    for (var i = 0; i < nums.length - 1; i++) {
        var arrSelector = [];
        var doubles = nums.map(function (x) {
            return x * 2;
        });
        arrSelector.push(doubles[i]);
        arrSelector.push(doubles[i+1]);
        countIter++


        console.log(countIter + 'ª pareja ' + arrSelector.join('-'))

    }
}

showNums();



