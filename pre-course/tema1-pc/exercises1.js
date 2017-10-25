
// n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras



function showMeLetterNoRepeat(name) 
{
        strCleanName = cleanName(name);
        countLetters (strCleanName);

        function cleanName(strName)
        {
                lwcName = strName.toLowerCase();
                clnName = lwcName.replace(/ /g,''); //remove spaces
                return clnName;
        }  
  
        function countLetters (strLetters)
        
        {
                var letters=[];
                var iteratLetters = [];
                chargeArrLetters();
                printRepeatLetters();


                function printRepeatLetters ()
                {
                        strResult = '';
                        for (var i = 0; i < letters.length-1; i++) 
                        {
                                if (iteratLetters[i]<2)
                                {
                                        
                                        strResult += letters[i];   
                    
                                }
                        }

                        console.log(strResult);
                }
                

                function chargeArrLetters()
                {
                        for (var i = 0; i < strLetters.length; i++) 
                        {
                                if ( letters.indexOf(strLetters[i]) < 0) //insert new letter
                                {
                                        letters.push(strLetters[i]);
                                        iteratLetters.push(1);
                                }

                                else
                                {
                                        var position;
                                        position = letters.indexOf(strLetters[i]);
                                        iteratLetters[position]+= 1;
                                }
                        }

                }
        
        }

      

       
}
    
showMeLetterNoRepeat('Alex Sanchez');

