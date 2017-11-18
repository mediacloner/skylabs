
//o) Crea una funcion que llame a nuestra funcion father(), ésta, a parte de llamarla, deberá hacer otro push "hello from the dark side..." 
//a la array que crea father(). Muestra toda la array completa.
function newFun() {

    var result = [];

    ini();

    function ini() {

        console.log(ageYear());
        result['starWars'] = 'hello from the dark side...';
        console.log(result);
    }


    function ageYear() {
        myName('Alex');
        myAge();

        return 'The first function returns: \'' + result['myName'] + '\' The second function returns: \'' + result['myAge'] + '\'';
    }
    function myName(pname) {
        result['myName'] = pname + ' aka Alx';
    }

    function myAge() {
        var age = random();
        console.log(age)
        if (age < 20) {
            result['myAge'] = 'You are young'
        }

        else {

            result['myAge'] = 'You are too old'
        }

    }
    function random() {
        return Math.floor((Math.random() * 50) + 1);
    }


  
}

newFun();
