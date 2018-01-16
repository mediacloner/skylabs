function isArray(arr) {

    if (arr.length > 0 && typeof arr === 'object')
        return true

    else
        return false
}

//Test Data:
console.log(isArray('Skylab'));    // this should returns false
console.log(isArray([3, 5]));      // this should returns true

function joinElements(arr) {
    var output = '';

    for (var i = 0; i <= arr.length - 1; i++) {
        if (i == arr.length - 1) {
            output += arr[i]
        }
        else {

            output += arr[i] + ', '
        }
    }
    return output
}

beatles = ['John', 'George', 'Ringo', 'Paul'];
console.log(joinElements(beatles))

function arrayClone(arr) { // TODO: Array(3)[1, 2, Array(2)] 
    var newArr = arr;
    return newArr
}

console.log(arrayClone([1, 2, 4, 0]));
console.log(arrayClone([1, 2, [4, 0]]));

function findDifferences (arr){
    function printArray(arr) {  // how to know
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] instanceof Array) {
                printArray(arr[i]);
            } else {
                console.log(arr[i]);
            }
        }
    }

    
}