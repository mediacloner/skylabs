

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

        function subtract (){
            var acc = 0;
            console.log(arguments)
            for (num in arguments[0]){
            acc -= arguments[0][num]  
            }
            return acc
        }
        var sumatory = subtract (nums)
        console.log('The subtract  is => ' + sumatory)

        function multiply(){
            var acc = 0;
            console.log(arguments)
            for (num in arguments[0]){
            acc = arguments[0][num] * acc 
            }
            return acc
        }
        var sumatory = multiply(nums)
        console.log('The multiply is => ' + sumatory)

        function divide(){
            var acc = 0;
            console.log(arguments)
            for (num in arguments[0]){
            acc =  acc / arguments[0][num]  
            }
            return acc
        }
        var sumatory = divide(nums)
        console.log('The divide is => ' + sumatory)
    }

calc(10, 10.25, 28);

