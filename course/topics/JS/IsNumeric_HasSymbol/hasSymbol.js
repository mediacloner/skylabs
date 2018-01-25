LIL function to detect if a character is a Number  (e.g. isNumber('0') => true).


function isNumeric (num){
    var sum =  num + 0
   if (sum.length >= num.length ){ // es string
       if (parseInt(num) == num) return true
   }

   else if (sum.length === num.length) { // es number
        return true
    }
   return false

}