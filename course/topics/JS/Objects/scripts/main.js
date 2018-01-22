function isObject(input) {
  if (input !== null && typeof input === "object")
    return true;
  else 
    return false;
}

var trueObj = {};
var falseObj = 'false';

//console.log(isObject (trueObj));
//console.log(isObject(falseObj));


function Car (color, brand, model){
    this.model = model;
    this.color = color;
    this.brand = brand;

}

var car1 = new Car( "black","Seat","Leon");


 function msgCar(objCar) {
   return "My " + objCar.color + " " + objCar.brand + " " + objCar.model + " is great!";
 }

 // console.log (msgCar(car1))





