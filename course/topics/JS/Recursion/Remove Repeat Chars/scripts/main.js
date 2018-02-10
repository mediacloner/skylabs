function removeRepChars(str) {
  var arrStr = str.split("");
  var arrResult = [];
  var pos = 0;
  recursiceFun();
  function recursiceFun() {
    var element = arrStr[pos];
    var repeatElement = false;
    arrResult.map(function(e) {
      //mapping all array
      if (e === element) {
        repeatElement = true;
      } // if find
    });
    if (!repeatElement) arrResult.push(element);
    pos++;
    if (pos <= arrStr.length - 1) recursiceFun(pos);
  }
  return arrResult.toString();
}

console.log(removeRepChars("aabcbcb")); //output -> abc

