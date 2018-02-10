function itsArray(arr) {
  return Array.isArray(arr);
}

//Test Data:
console.log(itsArray("Skylab")); // this should returns false
console.log(itsArray([3, 5])); // this should returns tru

function joinEements(arr) {
  var output = "";

  for (var i = 0; i <= arr.length - 1; i++) {
    if (i == arr.length - 1) {
      output += arr[i];
    } else {
      output += arr[i] + ", ";
    }
  }
  return output;
}

//beatles = ['John', 'George', 'Ringo', 'Paul'];
//console.log(joinElements(beatles))

function arrayClone(arr) {
  var newArr = arr;
  return newArr;
}

//console.log(arrayClone([1, 2, 4, 0]));
//console.log(arrayClone([1, 2, [4, 0]]));

function findDifferences(arr1, arr2) {
  var loopArr1 = 1;
  var loopArr2 = 1;
  var count = 0;
  var newArray1 = [].concat.apply([], arr1);
  var newArray2 = [].concat.apply([], arr2);
  while (loopArr1 === 1) {
    count++;
    var oldArray1 = newArray1;
    newArray1 = [].concat.apply([], newArray1);
    //if (newArray2 == oldArray2 || count > 100) loopArr2 = 0;
    if (count > 10) loopArr1 = 0;
  }

  count = 0;
  while (loopArr2 === 1) {
    count++;
    var oldArray2 = newArray2;
    newArray2 = [].concat.apply([], newArray2);

    //if (newArray2 == oldArray2 || count > 100) loopArr2 = 0;
    if (count > 10) loopArr2 = 0;
  }

  if (count > 100) console.error("Exception: infinite loop.");
  newArray1.push.apply(newArray1, newArray2);

  console.log (newArray1);

  return diffPlainArray(newArray1);

  function diffPlainArray(arr) {
    var arrayResult = [];
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        console.log(arr[i], arr[j]);
        if (arrayResult.indexOf(arr[i]) < 0 && arr[i] === arr[j] && i != j) arrayResult.push(arr[i]);
      }
    }

    return arrayResult;
  }
}
//console.log(findDifferences([1, 2, 3], [100, 2, 1, 10]));

console.log(findDifferences([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));

function sumPro(arr) {
  var sum = 0;
  var prod = 1;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    prod *= arr[i];
  }
  return "Sum " + sum + " Product: " + prod;
}

//var arrNum = [2,3,4]
//console.log (sumPro (arrNum))

function addItems() {
  var arr = [];
  for (var i = 0; i <= arguments.length - 1; i++) {
    arr.push(arguments[i]);
  }
  return arr;
}

//console.log(addItems (2,8,4))

function arrayRange(num, len) {
  var arrResult = [num];
  for (var i = 1; i < len; i++) {
    arrResult.push(num + i);
  }

  return arrResult;
}

//  console.log(arrayRange(1, 4));
//  console.log(arrayRange(-6, 4));

function last(arr, len) {
  if (len === undefined) {
    var result = arr[arr.length - 1];
  } else {
    var result = [];
    for (var i = arr.length - len; i < arr.length; i++) {
      if (arr[i] != undefined) result.push(arr[i]);
    }
  }

  return result;
}

//console.log(last([7, 9, 0, -2]));
//console.log(last([7, 9, 0, -2], 3));
//console.log(last([7, 9, 0, -2], 6));

function sortItems(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

//var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

//console.log (sortItems(arr1));

function getRandom(arr) {
  var x = Math.floor(Math.random() * arr1.length - 1 + 1);
  console.log(x);

  return arr[x];
}

//var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
//console.log(getRandom(arr1));

function findDuplicates(arr) {
  var arrayResult = [];
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arrayResult.indexOf(arr[i]) < 0 && arr[i] === arr[j] && i != j)
        arrayResult.push(arr[i]);
    }
  }

  return arrayResult;
}

//var arr1 = [9, 3, 7, 6, 2, 2, 3, 2, 1];

//console.log(findDuplicates(arr1));

function mergeArrays(arr1, arr2) {
  var newArray = [];
  arr1.forEach(function(a) {
    if (newArray.indexOf(a) < 0) newArray.push(a);
  });
  arr2.forEach(function(a) {
    if (newArray.indexOf(a) < 0) newArray.push(a);
  });
  return newArray;
}
//var array1 = [1, 2, 3];
//var array2 = [2, 30, 1];
//console.log(mergeArrays(array1, array2));

// separateEven

// Write a JavaScript program which accept a number as input and insert dashes 
// (-) between each two even numbers. For example if you accept 025468 the output 
// should be 0-254-6-8
function separateEven(input) {
  var array = input.split('');
  var resultString = "";
  for (var i = 0; i <= array.length-1; i++) {
    if ((i == 0))  resultString = array[0];
    else {
      array[i - 1] % 2 == 0 && array[i] % 2 == 0
        ? (resultString = resultString + "-" + array[i])
        : (resultString = resultString + array[i]);
    }
  }
  return resultString;
}
separateEven("025468");

//mostFrequentItem

//Write a JavaScript program to find the most frequent item of an array.

//Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//Sample Output : a ( 5 times ) 

function mostFrequentItem(arr) {
  var res = arr.reduce(function(result, e) {
    result[e] = (result[e] || 0) + 1;
    return result;
  }, {});
  return res;
}

mostFrequentItem([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);

// The next one works perfectly, reduce two lines in only one.
// The 'return' resolve a statement and ',' give the result.

function mostFrequentItem(arr){
    var res=arr.reduce(function (result, e) {
      return (result[e] = (result[e] || 0) + 1), result;
      
    }, {})
    return res;
}

mostFrequentItem([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);


//

// moveElement
// 
// Write a JavaScript function to move an array element from one position to another.


function move(arr, posIni, posEnd) {
  var posIniArr, porEndArr;
  if (posIni >= 0) posIniArr = posIni;
  else posIniArr = arr.length + posIni;

  if (posEnd >= 0) porEndArr = posEnd;
  else porEndArr = arr.length + posEnd;

  var itemArr = arr[posIniArr];

  arr.splice(posIniArr,1);
  arr.splice(porEndArr, 0, itemArr);
 
  return arr

}


//swapCase
//
//Write a JavaScript program which accept a string as input and swap the case of each character. 
//For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.


function swapCase (str){
    arr = str.split("");
    newArrResult = [];
    arr.forEach(function(e) {
      if (e == e.toLowerCase()) {
        newArrResult.push(e.toUpperCase());
      } else {
        newArrResult.push(e.toLowerCase());
      }
    });

    return newArrResult.join("");

}
// Print elements array
// 
// Write a JavaScript program which prints the elements of the following array.
// Note : Use nested for loops.

function printArray (arr){

    for (var i = 0; i <= arr.length-1; i++){
      console.log ('row '+ i);
      for (var j = 0; j <= arr[j].length-1; j++ ){
        console.log (' ' + arr[i][j]);
      }
    }

}

 var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
printArray (a);





//array_filled (string)
//
//Write a JavaScript function to create a specified number of elements
//with pre-filled string value array.

function arrayFilled (iterations, strDefValue){
    var arrResult = [];  
    for (var i = 0; i < iterations; i++ ){
        arrResult.push(strDefValue);
    }
    return arrResult;
}

console.log(arrayFilled(3, "default value")); 

console.log(arrayFilled(4, "password"));

//Sum squares
//TODO:
//Write a JavaScript program to find the sum of squares of a numeric vector.


//removeDuplicate

//Write a JavaScript program to remove duplicate items from an array 
//(ignore case sensitivity). TODO:

function removeDuplicates (arr){
   return arr.reduce(function(result, current){
      console.log (result);
      console.log (current);

      if (self.indexOf(current) === -1)
         return result.push(current)
      else
         return result
    }, []);
}


removeDuplicates ([2,3,5,6,2,'a', 'A', 'b', 'C']);


//showChoices
//
//We have the following arrays : color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]; o = ["th","st","nd","rd"] Write a JavaScript program to display the colors in the following way : "1st choice is Blue ." "2nd choice is Green." "3rd choice is Red."
//
//Note : Use ordinal numbers to tell their position.

function showChoices(color) {
  o = ["th", "st", "nd", "rd"];

  for (var i =0; i < color.length ; i++){
      if (i >= 3) console.log((i + 1) + o[0] + " choice is " + color[i]);
  else console.log((i+1) + o[i+1] + " choice is " + color[i]);
  }

}

col = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
showChoices(col);


//showLeapYears
//
//Find the leap years in a given range of years.

function showLeapYears(yearIni, yearEnd){
  years = yearEnd - yearIni;  
      for (var i = 0; i<= years; i++){
        var y = yearIni + i;
          if (isLeap (y))  console.log ('Leap year: ' + y)
      }

    function isLeap(year) {

      if (year % 400 === 0) return true;
      else if (year % 4 === 0 && year % 100 != 0 ) return true;
      else return false;
      
    }

}

// shuffleArray
// 
// Write a JavaScript program to shuffle an array.


function shuffleArray (arr) {
  var newArr = [];
  var lengthArrIni = arr.length;
  for (var i = 0; i < lengthArrIni; i++) {
    var posRan = Math.floor(Math.random() * (arr.length - 1));
    var z = arr.splice(posRan, 1);
    newArr.push(z.toString());
  }

  return newArr;

}


arrIns = [1,2,3,4,5,6,7,8,9]

console.log(shuffleArray(arrIns));