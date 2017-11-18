
//n) Refactorizemos nuestro código dejando todas las funciones 
//separadas del padre, éste último se encargará de llamarlas todas y mostrar sus resultados.
function refactor (){

    console.log(ageYear());
    function ageYear() {
        var name = 'Alex';

        return 'The first function returns: \'' + myName(name) + '\' The second function returns: \'' + (myAge()) + '\'';
    }
    function myName(pname) {
        return pname + ' aka Alx';
    }

    function myAge() {
        var age = random();
        console.log(age)
        if (age < 20) {
            return 'You are young'
        }

        else {

            return 'You are too old'
        }

    }
    function random() {
        return Math.floor((Math.random() * 50) + 1);
    }


  
}

refactor();
