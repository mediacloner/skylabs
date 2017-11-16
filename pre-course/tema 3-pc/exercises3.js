

//g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función 
// padre deberá ser la llamada a las funciones hijas

function fatherFun (){

    console.log(ageYear());


    function ageYear (){
        var name = 'Alex';
        var age = 41;
        function myName(pname) {
            return pname;
        }

        function myAge(page) {
            return page;
        }



        return  myName(name) + ' ' + (myAge(age));
    } 


  




  
}

fatherFun();
