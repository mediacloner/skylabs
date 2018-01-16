function isObject(input) {
  if (input !== null && typeof input === "object")
    return true;
  else 
    return false;
}

var trueObj = {};

console.log(isObject (trueObj))
