

//j) Al return de la función name(), concaténale otro mensaje
function messageName (){

    console.log(ageYear());


    function ageYear (){
        var name = 'Alex';
 
        function myName(pname) {
            return  pname + ' aka Alx, ';

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

messageName();
