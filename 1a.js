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
rl.on('line', function (answer) {
    console.log(secondLargest(answer));
    rl.close();
    process.stdin.destroy();
});
