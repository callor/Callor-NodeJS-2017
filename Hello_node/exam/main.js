
var calc = require('./module.js');

console.log('calc.add = %d', calc.add(3,4));
console.log('calc.multi = %d', calc.multi(4,3));

var calc1 = require('./module1.js');

console.log('calc1 = %d', calc1(3,4));
