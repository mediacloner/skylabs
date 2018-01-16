function largerInteger(a,b) {

if (a > b) console.log(a);
else console.log(b);
}


largerInteger(3, 4);

function signProduct(a, b, c) {
  if (a < 0 || b < 0 || c < 0) {
    console.log("The sign is -");
  }
}

signProduct(3, -7, 2);




function sortNumbers(a, b, c) {

var array = [];

switch (true) {
  case a > b > c:
    array.push(a, b, c);
    break;

  case b > c > a:
    array.push(b, c, a);
    break;

  case c > a > b:
    array.push(c, a, b);
    break;

  case a > c > b:
    array.push(a, c, b);
    break;

  case b > a > c:
    array.push(a, c, b);
    break;

  case c > b > a:
    array.push(a, c, b);
    break;
}

  var string ='';
  

for (var i=0; i<= array.length-1; i++){
    string = string + array[i] +', '
}

console.log("Output: " + string);

}

sortNumbers(0, -1, 4);

function largestNumber(a, b, c, d, e) {
  var result;
  var array = []
  array.push (a,b,c,d,e);

  for (var i=1; i<= array.length-1; i++){
    if ( array[i-1]> array[i])

    result = array[i-1];

    else
    result = array[i];
  }

  console.log ('Result:' + result);


}
largestNumber(-5, -2, -6, 0, -1);


function odd() {
    for (var i = 0; i <= 15; i++) {
       
        if (i == 0){
           console.log(i + " is even");
        }
        else{
            if (i % 2 === 0) {
                 console.log (i + " is even")
            }      
            else {
                console.log(i + " is odd");
            }
        }
    }
    
}
odd()

function fizzBuzz() {



}


