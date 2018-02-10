
//function

function calculator(val) {
  this.result = val;
  // this part is necessary for the first iteration
  // if you need acces to funtions shoud writte this:
  //
  //      sum = function (val) {
  //        result += val2;
  //        return this.result;
  //      }

  return {
    // buid a object for the next result (remember sum: not sum=)

    result: this.result,
    sum: function(v) {
      this.result += v;
      return this;
    },
    mult: function(v) {
      this.result *= v;
      return this;
    },
    div: function(v) {
      this.result /= v;
      return this;
    },
    subs: function(v) {
      this.result = this.result - v;
      return this;
    },
    equal: function() {
      return this.result;
    }
  };
}

calculator(2).sum(2).mult(3).equal();



// chain  && constructor

var Cal = function(val) {

  this.result;

  this.num = function (val) {
      this.result = val;
      return this;
  }
  this.sum = function(val) {
      this.result += val;
      return this;
    };
  this.mult = function(val) {
    this.result *= val;
    return this;
  };

  this.div = function(val) {
    this.result /= val;
    return this;
  };

  this.subs = function(val) {
    this.result = this.result - val;
    return this;
  };

  this.equal = function() {

    return this.result;
  };
};

var calc = new Cal();