// a2) Pasa también el numero a multiplicar a la función como argumento

function argnts() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var countIter = 0;

    var l = nums.length;

    showNums(nums);

    function showNums() {
        var arrArg = arguments[0];
        var len = arrArg.length;

        for (var i = 0; i < arrArg.length - 1; i++) {

            var arrSelector = [];

            var doubles = arrArg.map(function (x) {
                return x * 2;
            });

            arrSelector.push(doubles[i]);
            arrSelector.push(doubles[i + 1]);
            countIter++

            console.log(countIter + 'ª pareja ' + arrSelector.join('-'))
        }

    }
}



