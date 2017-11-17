

//k) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable
function newMessageName (){

    console.log(ageYear());


    function ageYear (){
        var name = 'Alex';
 
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



        return 'The first function returns: \''+ myName(name) + '\' The second function returns: \'' + (myAge()) + '\'';
    } 


  




  
}

newMessageName();
