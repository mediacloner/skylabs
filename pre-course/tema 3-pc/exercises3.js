

//m) Vamos a complicarlo un poco... 
//El número random debería generarse en otra función separada del padre. Retorna a la funcion padre y concaténalo en el return padre.
function mainRandom (){

    console.log(ageYear());


    function ageYear (){
        var name = 'Alex';
     
 
        function myName(pname) {
            return  pname + ' aka Alx';

        }

        function myAge() {
            var age = random();
            console.log(age)
            if (age < 20){
                return 'You are young'
            }

            else {

                return 'You are too old'
            }
             
        }

 
            return 'The first function returns: \'' + myName(name) + '\' The second function returns: \'' + (myAge()) + '\'';  
       
        
               
    } 

    function random() {
        return  Math.floor((Math.random() * 50) + 1);
    }
  
}

mainRandom();
