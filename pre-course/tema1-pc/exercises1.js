
// Working space for debug.

function tubeName () {
    
        var myName = ['Alex', 'Sanchez']

        var result = '';

        for (var i = 0 ; i < myName.length-1; i++)
        {
            for (var j = 0; j < myName [i].length; j++)

            {
               result = result + myName [i] [j] + '|'
            }


        }
        

        console.log(result);
       
        }
    
        tubeName();

