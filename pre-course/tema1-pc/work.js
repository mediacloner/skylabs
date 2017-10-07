
function calc (){
    var nums = arguments
        console.log(nums)
       function sum(){
            var acc = 0;
            console.log(arguments)
            for (num in arguments[0]){
            acc += arguments[0][num]  
            }
            return acc
        }
        var sumatory = sum(nums)
        console.log('The sum is => ' + sumatory)
    }
    
    calc(10);