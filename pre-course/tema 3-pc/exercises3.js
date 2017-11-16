

//f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.

function varPar (){
    var name = 'Alex';
    var age = 41;

    var myfuntion = myName(name)+' ' + (myAge(age));
    console.log (myfuntion);


    function myName(pname) {
        return pname;
    }

    function myAge(page) {
        return page;
    }

    function myRandomNumber() {

        return Math.floor((Math.random() * 10) + 1);
    }
}

varPar();
