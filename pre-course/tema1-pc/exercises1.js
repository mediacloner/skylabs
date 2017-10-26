//e) Podemos controlar este error con un condicional if?
function getCalc (num1, str)
{
        var resultMult = num1 * str;

        if (isNaN(resultMult))
        {
                resultMult = 'You can\'t do this operation!';
        }

        console.log( 'Result =>' + resultMult );


        
        
}

getCalc(2, 'Hola');


// Result =>NaN


