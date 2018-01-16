function isObject(input) {
  if (input !== null && typeof input === "object")
    return true;
  else 
    return false;
}

var trueObj = {};
var falseObj = 'false';

console.log(isObject (trueObj));
console.log(isObject(falseObj));

function msgCar(objCar) {

  return "My " + objCar.color + " " + objCar.brand + " " + objCar.model + " is great!";
  
}


var car = { brand: "Seat", model: "Leon", color: "black" };

console.log(msgCar(car))


