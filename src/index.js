module.exports = function sum(...a) {
  if (a.length == 0) return 0;
  return function(...b) {
    if (b.length == 0) { 
      a.reduce = [].reduce;
      return a.reduce((a, b) => a + b, 0);
    } 
    a.concat = [].concat;
    return sum.apply(this, (a.concat(b)));
  }
}


/*module.exports = function sum() {
  this.storage = this.storage || 0;

  if (arguments.length > 0) {
    arguments.reduce = [].reduce;
    this.storage += arguments.reduce((a, b) => a + b, 0);
    return sum;
  }

  let res = this.storage;
  this.storage = 0;
  return res;
}*/