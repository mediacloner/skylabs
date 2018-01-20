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


 var result = (loremIpsum.split("")).reduce(function(resultVowel, vowel) {

      resultVowel[vowel] = (resultVowel[vowel] || 0) + 1;
      return resultVowel;
   
 },{});
 console.log(result);