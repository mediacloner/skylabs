

//Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, 
//no siga con la segunda llamada
function newMessageName (){

    console.log(ageYear());


    function ageYear (){
        var name 
        //= 'Alex';
         = 'Pepe';
 
        function myName(pname) {
            return  pname + ' aka Alx';

        }

        function myAge() {
            var age = Math.floor((Math.random() * 50) + 1);

            if (age < 20){
                return 'You are young'
            }

            else {

                return 'You are too old'
            }
             
        }

        if (name == 'Alex'){
            return 'The first function returns: \'' + myName(name) + '\' The second function returns: \'' + (myAge()) + '\'';  
        }
        else {
            return 'The first function returns: \'' + myName(name) 
        }
               
    } 

  
}

newMessageName();
