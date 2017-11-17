

//i) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es de 21 - 50
function randomAge (){

    console.log(ageYear());


    function ageYear (){
        var name = 'Alex';
 
        function myName(pname) {
            return pname;
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



        return  myName(name) + ' ' + (myAge());
    } 


  




  
}

messageAge();
