// a1) La funcion debería aceptar la array a tratar como argumento.

function showNums() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var countIter = 0;
    for (var i = 0; i < nums.length - 1; i++) {
        var arrSelector = [];
        var doubles = nums.map(function (x) {
            return x * 2;
        });
        arrSelector.push(doubles[i]);
        arrSelector.push(doubles[i + 1]);
        countIter++


        console.log(countIter + 'ª pareja ' + arrSelector.join('-'))

    }
}

showNums();


