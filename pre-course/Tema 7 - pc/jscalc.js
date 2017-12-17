function calculator() {

    var input1 = parseInt(document.getElementById('n1').value);
    var input2 = parseInt(document.getElementById('n2').value);
  
    document.getElementById('sumResult').innerHTML = sum(input1, input2);
    document.getElementById('subResult').innerHTML = sub(input1, input2);
    document.getElementById('multResult').innerHTML = mult(input1, input2);
    document.getElementById('divResult').innerHTML = div(input1, input2);



    function sum(in1, in2) {
        return in1 + in2;  
    }
    function sub(in1, in2) {
        return in1 - in2;
    }
    function mult(in1, in2) {
        return in1 * in2;
    }
    function div(in1, in2) {
        return in1 / in2;
    }

    
}



