calc(10, 10.25, 28);


function calc ()
{
return sum (arguments);

   function sum(){
        var acc = 0;
        for (num in arguments){
        console.log(num)
        acc += arguments[num]   
        }
        return acc
    }
}