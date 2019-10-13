"use strict";
exports.__esModule = true;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var secondLargest = function (array) {
    if (array.length < 2) {
        return null;
    }
    var a = array[0];
    var b;
    if (array[1] > a) {
        b = a;
        a = array[1];
    }
    else {
        b = array[1];
    }
    for (var i = 2; i < array.length; i++) {
        if (array[i] > a) {
            b = a;
            a = array[i];
        }
        else if (array[i] > b) {
            b = array[i];
        }
    }
    return b;
};
var n;
var array1 = [];
rl.question("How long is your array? ", function (answer) {
    n = Number(answer);
    rl.close();
    process.stdin.destroy();
});
for (var i = 0; i < n; i++) {
    rl.question("What is the next number in your array?", function (answer) {
        array1.push(Number(answer));
        rl.close();
        process.stdin.destroy();
    });
}
console.log(secondLargest(array1));
