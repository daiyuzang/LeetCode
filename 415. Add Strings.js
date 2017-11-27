/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    var i = num1.length - 1,
        j = num2.length - 1,
        carry = 0;
    var char = "";
    while (i >= 0 || j >= 0) {
        if (i >= 0)
            carry += parseInt(num1[i--]);
        if (j >= 0)
            carry += parseInt(num2[j--]);
        char = parseInt(carry % 10).toString() + char;
        carry = parseInt(carry / 10);
    }
    return carry != 0 ? "1" + char : char;
};