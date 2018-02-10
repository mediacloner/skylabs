

function counterDigit(num, digit) {
        
        var digitsStrArray = num.toString().split("");
        var digitsArray = digitsStrArray.map(Number);
        var position = 0;
        var result = 0;
        recurs();
   
    
    function recurs() {
      if (digitsArray[position] === digit)
         {result = result + 1};
      position++;
      if (position <= digitsArray.length - 1) {
        recurs();
      }
    }
     return "The number " + digit + " is repeat " + result + " time(s)";
}


console.log(counterDigit(23498429, 2))