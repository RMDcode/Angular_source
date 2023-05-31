"use strict";
exports.__esModule = true;
exports.Summation = void 0;
function Summation(Arr) {
    var sum = 0;
    var cnt = 0;
    for (cnt = 0; cnt < Arr.length; cnt++) {
        sum = sum + Arr[cnt];
    }
    return sum;
}
exports.Summation = Summation;
