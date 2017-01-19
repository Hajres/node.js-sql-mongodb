var math = require("./math")
console.log(math)

var command = process.argv[2]
var a = Number(process.argv[3]);
var b = Number(process.argv[4])

var value = math.add(3, 5);

console.log(value);
