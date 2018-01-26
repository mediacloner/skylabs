// Step by step works fine but when you need to have a chain functions don't work.

//constructor

function Cal (val1) = {
  this.result= 0;
  this.theValue = function(val1) {
    this.result = val1;
    return this.result;
  };
  this.sum = function (val2) {
    this.result += val2;
    return this.result;
  };
  this.mult = function(val3) {
    this.result *= val3;
    return this.result;
  };

  this.div = function(val4) {
    this.result /= val4;
    return this.result;
  };

  this.sub=function(val5) {
    this.result = result - val5;
    return this.result;
  }
};

var calculator = new Cal();

// chain

var calculator = {
  result : 0,
  theValue: function(val1) {
    this.result = val1;
    return this.result;
  },
  sum: function(val2) {
    this.result += val2;
    return this.result;
  },
  mult: function(val3) {
    this.result *= val3;
    return this.result;
  },

  div: function(val4) {
    this.result /= val4;
    return this.result;
  },

  res: function(val5) {
    this.result = result - val5;
    return this.result;
  }
};


console.log(calculator.theValue(4).sum(3).mult(2))

// Recursive funtions

function recursive(val1){

  val1--
  console.log ('Hey! this is loop number:' + val1)
  if (val1 > 0)  recursive(val1)  ;

}

_recursive (8);

/////////////////////////////////////////////////

var text;
(function () {
  function wrap(text, before, after) {
    return (before || '') + text + (after || before || '');
  }

  text = function (_text) {//HOLa
    var __text = new String(_text); //String HOLA

    __text.wrap = function (before, after) {
      return text(wrap(_text, before, after));
    }

    return __text;
  }
})();

text("HOLA")





