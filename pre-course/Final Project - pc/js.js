

function changeYellow(elementId) {
    document.getElementById(elementId).className = "round yellow";
    document.getElementById("questions").innerHTML = "We are here";
    
}
function changeRed(elementId) {
    document.getElementById(elementId).className = "round red";

}

function changeGreen(elementId) {
    document.getElementById(elementId).className = 'round green';

}

function changeBlue(elementId) {
    document.getElementById(elementId).className = 'round blue';

}

function delayFuntion(seconds) {
var timeAcc = 0;
while (timeAcc => seconds){
    setInterval (function () {timeAcc++}, 1000)     
}
return true;
}


delayFuntion (10);
console.log("OK")




