
// Working space for debug.

function arrNumbersXinv() 
{
    
        var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

        var multiplier = 3;
        
        var multByTwo = numbers.map(function(x) {
            return x * multiplier;
         })

        
       
       console.log (multByTwo.sort(function(a, b){return b-a}));

       
        }
    
        arrNumbersXinv();

