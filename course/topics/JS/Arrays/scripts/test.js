function showLeapYears(yearIni, yearEnd) {
  years = yearEnd - yearIni;
  for (var i = 0; i <= years; i++) {
    var y = yearIni + i;
    if (isLeap(y)) console.log("Leap year: " + y);
  }

  function isLeap(year) {
    if (year % 400 === 0) return true;
    else if (year % 4 === 0 && year % 100 != 0) return true;
    else return false;
  }
}


showLeapYears(1900, 1940);