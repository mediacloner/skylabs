function itsArray(arr) {

  
    return Array.isArray(arr);


}

//Test Data:
console.log(itsArray('Skylab'));    // this should returns false
console.log(itsArray([3, 5]));      // this should returns tru

function joinEements(arr) {
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

//beatles = ['John', 'George', 'Ringo', 'Paul'];
//console.log(joinElements(beatles))

function arrayClone(arr) { 
    var newArr = arr;
    return newArr
}

//console.log(arrayClone([1, 2, 4, 0]));
//console.log(arrayClone([1, 2, [4, 0]]));

function findDifferences (arr){ 
var newArray




}
//console.log(findDifferences([1, 2, 3], [100, 2, 1, 10]));


//["3", "10", "100"];



function sumPro (arr){
    var sum = 0;
    var prod = 1;
  for (var i = 0; i < arr.length; i++){

        sum += arr[i];
        prod *= arr[i];

  }
 return 'Sum ' + sum + ' Product: ' + prod

}

//var arrNum = [2,3,4]
//console.log (sumPro (arrNum))

function addItems (){  

    var arr = []
    for (var i=0; i <= arguments.length-1; i++){
        arr.push(arguments[i])
    }
    return arr
}

//console.log(addItems (2,8,4))

function arrayRange(num, len) {
    var arrResult = [num];
    for (var i = 1; i < len; i++) {
        arrResult.push(num+i)
    }

    return arrResult
}


//  console.log(arrayRange(1, 4));
//  console.log(arrayRange(-6, 4));

 
 
function last(arr, len){
if (len === undefined){
    var result = arr[arr.length - 1];
    
}else{
    var result = []
    for (var i = arr.length  - len; i < arr.length ; i++) {
        if (arr[i] != undefined)
        result.push( arr[i])
    }

}

return result
}

//console.log(last([7, 9, 0, -2]));
//console.log(last([7, 9, 0, -2], 3));
//console.log(last([7, 9, 0, -2], 6));

function sortItems (arr){
    return arr.sort(function(a, b) {
      return a - b;
    });

}

//var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

//console.log (sortItems(arr1));

function getRandom(arr) {
    var x = Math.floor((Math.random() * arr1.length-1) + 1);
    console.log(x)

    return arr[x];
}

//var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
//console.log(getRandom(arr1));

function findDuplicates(arr){
 var arrayResult = []
for (var i = 0; i < arr.length-1; i++) {
  for (var j = 0; j < arr.length-1; j++) {


    if (arrayResult.indexOf(arr[i]) < 0 && arr[i] === arr[j] && i != j) 
    arrayResult.push(arr[i]);

  }
}

return arrayResult
}

//var arr1 = [9, 3, 7, 6, 2, 2, 3, 2, 1];

//console.log(findDuplicates(arr1));


function mergeArrays(arr1, arr2){
var newArray = []
arr1.forEach(function (a) {
    
  if (newArray.indexOf(a) < 0) newArray.push(a)
 
})
arr2.forEach(function(a) {
  if (newArray.indexOf(a) < 0) newArray.push(a);
});
 return newArray

}
//var array1 = [1, 2, 3];
//var array2 = [2, 30, 1]; 
//console.log(mergeArrays(array1, array2));

