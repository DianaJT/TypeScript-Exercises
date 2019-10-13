"use strict";
var afterLargest = function (array) {
    if (array.length < 2) {
        return null;
    }
    var a = array[0];
    var b = array[1];
    for (var i = 1; i < array.length - 1; i++) {
        if (array[i] > a) {
            a = array[i];
            b = array[i + 1];
        }
    }
    if (array[array.length - 1] > a) {
        return null;
    }
    else {
        return b;
    }
};
module.exports = { afterLargest: afterLargest };
