
// n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?



function letterRepeat(name) 
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
                        for (var i = 0; i < letters.length-1; i++) 
                        {
                                
                        }
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
    
letterRepeat('Alex Sanchez');

