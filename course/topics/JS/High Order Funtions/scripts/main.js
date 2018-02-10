//map

//Write a high order function that take the array of months and create a new array that contains the same months but with the first letter in upper case.

var months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december"
];

months.map(function(e) {
  return e.charAt(0).toUpperCase() + e.substring(1);
});
//filter

// Write a high order function that take the array of months and create a new array that contains only the months that begin with j.

months.filter(function(e) {
  return e.charAt(0)=== 'j';
});

//reduce

//Write a high order function that counts all the vowels of the following text.

var loremIpsum =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.";


 var result = loremIpsum.split("").reduce(function(resultVowel, char) {
   if (["a", "e", "i", "o", "u"].indexOf(char.toLowerCase()) >= 0) {
     var vowelLower = char.toLowerCase();
     resultVowel[vowelLower] = resultVowel[vowelLower] + 1;
     return resultVowel;
   } else return resultVowel;
 }, { a: 0, e: 0, i: 0, o: 0, u: 0 });
 console.log(result);

// // every & some

// Write a high order function that returns true if all months have five letters or more, 
// and if some month has five letters or more.


var months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december"
];



function monthFiveLet(year, minNumMonth) {
  
var filterArr = year.filter(function(e) {return e.length > 5 ;});
var result = filterArr.length >= minNumMonth ? true : false;

return result;
}

allMonthFiveLet (months, 12);
allMonthFiveLet(months, 3);


// Better :


function month() {
  var result = months.every(function(elem) {
    return elem >= 5;
  });
  console.log("All months have five or more letters: " + result);
}
function someMonths() {
  var some = months.some(function(elements) {
    return elements >= 5;
  });

  console.log("Some months have five or more letters: " + some);
}
month();
someMonths();

//## Callback
//Write a callback function that receives an age and a callback function, if age is equal 
//or great than 18, call the callback function to allow enter in a bar, if hasn't 18 the entrance is not allowed.

function accessBar(age, func_tion) {
  
  age >= 18 ? func_tion("access") : func_tion();;
 

}

function advisor(permition) {
  var result;
  permition == "access" ? (result = "the entrance is allowed") : (result = "the entrance is not allowed"); 
  console.log (result);
}

accessBar(8, advisor);