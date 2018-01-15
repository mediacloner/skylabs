calc(10, 10.25);


function calc (num1, num2)
{

    var results = []



    if (num1 === null && num2 === null)

    {
        console.log('Por favor. indique los numeros en las variables del programa.')

    }


    else if (num1 === null || num2 === null)
    {

        if (num1 === null)
        {
            console.log('La raiz cuadrada de ' + num2 + ' es ' + Math.sqrt (num2).toFixed(3))
        }

        else
        {
            console.log('La raiz cuadrada de ' + num1 + ' es '  + Math.sqrt (num1).toFixed(3))
        }

    }

    else
    {
        calculator (num1, num2);

    }


    function calculator (number1, number2)
    {
        results.push(number1 + number2);
        results.push(number1 - number2);
        results.push(number1 * number2);
        results.push(number1 / number2);

        return console.log 

        (   

            'El resultado es:'                            + "\n" +
            '-------------------------'                   + "\n" +
            'SUMA:            '   + results[0].toFixed(3) + "\n" +  //toFixed == 3 decilames
            'RESTA:           '   + results[1].toFixed(3) + "\n" +
            'MULTIPLICACION:  '   + results[2].toFixed(3) + "\n" +
            'DIVISION:        '   + results[3].toFixed(3) + "\n" 
        
        
        );




    }
}