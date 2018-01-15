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
        var sumSumatory = sum(nums)
        console.log('The sum is => ' + sumSumatory.toFixed(3))

        function subtract (){
            var acc =0;
			var firstLoop = 0;
            console.log(arguments)
            for (num in arguments[0]){
			if (firstLoop === 0){
			
				acc = arguments [0][0];
				firstLoop = 1;
			
				}
			
			else{
			
				acc -= arguments[0][num]
				} 
            }
            return acc
        }
        var subSumatory = subtract (nums)
        console.log('The subtract  is => ' + subSumatory.toFixed(3))

        function multiply(){
            var acc =0;
			var firstLoop = 0;
            console.log(arguments)
            for (num in arguments[0]){
			if (firstLoop === 0){
			
				acc = arguments [0][0];
				firstLoop = 1;
			
				}
			
			else{
			
				acc *= arguments[0][num]
				} 
            }
            return acc
        }
        var multSumatory = multiply(nums)
        console.log('The multiplication is => ' + multSumatory.toFixed(3))

        function divide(){
          var acc =0;
			var firstLoop = 0;
            console.log(arguments)
            for (num in arguments[0]){
			if (firstLoop === 0){
			
				acc = arguments [0][0];
				firstLoop = 1;
			
				}
			
			else{
			
				acc /= arguments[0][num]
				} 
            }
            return acc
        }
        var divSumatory = divide(nums)
        console.log('The division is => ' + divSumatory.toFixed(3))
    }

calc(10, 10.25, 28);

console.log("Type some text and press <ENTER>:\t");
var userInput = readline();
console.log("User input: " + userInput);
