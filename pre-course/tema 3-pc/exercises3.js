

//h) Haz otra función hija que solo devuelva un número random, ese número random será 
//el argumento que se pasará como parámetro a la función age()
function randomAge (){

    console.log(ageYear());


    function ageYear (){
        var name = 'Alex';
 
        function myName(pname) {
            return pname;
        }

        function myAge() {
            return Math.floor((Math.random() * 1000) + 1);
        }



        return  myName(name) + ' ' + (myAge());
    } 


  




  
}

randomAge();
