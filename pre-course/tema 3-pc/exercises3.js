
//ñ) Intenta hacer push de todos los resultados de las funciones a 
//una array declarada en el padre, muestra los resultados de esta array como siempre.
function refactor (){
    var result = [];
    console.log(ageYear());

    function ageYear() {
        myName('Alex');
        myAge();

        return 'The first function returns: \'' + result[myName] + '\' The second function returns: \'' + result[myAge] + '\'';
    }
    function myName(pname) {
        result[myName] = pname + ' aka Alx';
    }

    function myAge() {
        var age = random();
        console.log(age)
        if (age < 20) {
            result[myAge] = 'You are young'
        }

        else {

            result[myAge] = 'You are too old'
        }

    }
    function random() {
        return Math.floor((Math.random() * 50) + 1);
    }


  
}

refactor();
