"use strict";
exports.__esModule = true;
exports.CountCapital = void 0;
function CountCapital(s) {
    var count = 0;
    for (var i in s) {
        if (s.charAt(i) === s.charAt(i).toUpperCase()) {
            count++;
        }
    }
    return count;
}
exports.CountCapital = CountCapital;
