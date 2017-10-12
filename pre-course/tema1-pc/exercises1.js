
// Working space for debug.

function posLettersSurname () {
    
        var myName = ['Alex', 'Sanchez']
        var selecArray = 1;
        var position = sumArray();
        var result = '';
       

        function sumArray(){

            var sum = 0;

            for (var i = 0; i<selecArray; i++)
            {
                
                sum = sum + myName[0].length;

            }
            return sum
        }
       
            for (var i = 0; i < myName [selecArray].length; i++)

            {
               position++; 
               result =result + position + 'º' + myName [selecArray][i] + ' ';
            }


           

        console.log(result.split(" ", myName [selecArray].length).toString());
       
        }
    
        posLettersSurname();

