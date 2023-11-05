const fs = require("fs");
const assert = require("assert");
eval(fs.readFileSync("code.js") + "");

//Test 1
assert(fib(1) == 1);
//Test 2
assert(fib(2) == 1);
//Test 3
assert(fib(3) == 2);
//Test 4
assert(fib(10) == 55);
//Test 5
assert(fib(22) == 17711);
//Test 6
assert(fib(0) == 0);
//Test 7
assert(fib(34) == 5702887);
//Test 8
assert(fib(65) == 17167680177565);