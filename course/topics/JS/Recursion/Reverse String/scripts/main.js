function reverseString (str){
    var arrStr = str.split("");
    var pos = arrStr.length-1;
    var resultArr = []
    reverRecursive();
    function reverRecursive (){
        resultArr.push(arrStr[pos]);
        pos--;
        if (pos >= 0) reverRecursive();

    }

    return resultArr.join("")

}

console.log (reverseString('hello'))