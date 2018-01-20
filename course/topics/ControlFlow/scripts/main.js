
//larger_integer

//Write a JavaScript program that accept two integers and display the larger.

function displayLarger(int1, int2) {

    var result = (int1 >= int2) ?  int1 : int2;
    return result;
    
}
//sign_product
//Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
//Sample numbers : 3, -7, 2 
//Output : The sign is -

function signProduct (num1, num2, num3){

    var result = num1 * num2 * num3;

    if (result < 0) return 'The sign is -'; 
    else return 'The sign is +'
    
}

//### sort_numbers
//Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
//Sample numbers : 0, -1, 4 
//Output : 4, 0, -1

function sortNumbers (num1, num2, num3){
    var numArray = [num1, num2, num3];
    numArray = numArray.sort(function (a, b) {  return a - b;  });
    return numArray;  
}



//###  largest_number
//Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
//Sample numbers : -5, -2, -6, 0, -1 
//Output : 0

function largestNumber (num1, num2, num3, num4, num5){
    var numArray = [num1, num2, num3, num4, num5];
    numArray.sort(function (a, b) {  return b - a;  });
    return numArray[0];}





//### odd_or_even
//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
//Sample Output : 
//"0 is even" 
//"1 is odd" 
//"2 is even"
function oddOrEven (){
 for ( var i = 0 ; i <= 15 ; i++){
    var result;
    (i%2 == 0) ? result = ' is even' : result =' is odd';
    console.log (i + result)

 }

}



//### FizzBuzz
//Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" 
//instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three 
//and five print "FizzBuzz".

function fizzBuzz (){
 for ( var i = 0 ; i <= 100 ; i++){
    var result = '';
    if (i%3 == 0)  result = ' Fizz';
    if (i%5 == 0)  result = ' Buzz';
    if (i%3 == 0 && i%5 == 0)  result = ' FizzBuzz';
    console.log (i + result)

 }

}


//### contruct_pattern
//
//Write a JavaScript program to construct the following pattern, using a nested for loop. Go to the editor


//*  
//* *  
//* * *  
//* * * *  
//* * * * *



function contructPattern() {
    var star = '* ';
    var line = '';
    var iterations = 0;
    for (var i = 0 ; i <= 5 ; i++){
        iterations += 0
        for (var j = 0 ; j <= iterations ; j++){
            line = line + star;
            console.log (line)
        }
    }
    
}

//### under_1000
//
//Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

function under1000() {
  for (var i = 0; i <= 1000; i++) {
    var result = 0;
    if (i % 3 == 0 && i % 5 == 0) result += i;

    }
    console.log(i + result);
}