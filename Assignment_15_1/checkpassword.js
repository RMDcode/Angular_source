"use strict";
exports.__esModule = true;
exports.CheckPassword = void 0;
function CheckPassword(pass) {
    var capitalword = /^.*[A-Z]{2}$/m;
    var smallword = /^.*[a-z]{3}$/m;
    var digits = /^.*[0-9]{2}$/m;
    var special = /^.*[~!@#$%^*\-_=+[{\]}\/;:,.?]{1}$/m;
    if (pass.includes(capitalword)) {
        if (pass.includes(smallword)) {
            if (pass.includes(digits)) {
                if (pass.includes(special)) {
                    return pass;
                }
            }
        }
    }
    else {
        return "password is invalid.";
    }
}
exports.CheckPassword = CheckPassword;
