

//e1) Intenta sumarle al resultado de tu segunda funcion, 
//un numero random del 0-10 y conviertelo todo a un solo string.

var myfuntion = myName()+' ' + (myAge() + myRandomNumber()).toString()

console.log (myfuntion);

function myName() {
    return 'Alex';
}

function myAge() {
    return 41;
}

function myRandomNumber() {

    return Math.floor((Math.random() * 10) + 1);
}

//output: IronMan 45
