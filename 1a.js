"use strict";
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
module.exports = { secondLargest: secondLargest };
