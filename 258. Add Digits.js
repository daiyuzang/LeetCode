/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    var str = num.toString();
    while (str.length > 1) {
        var key = 0;
        for (var i in str) {
            key += parseInt(str[i]);
        }
        str = key.toString();
    }
    return parseInt(str);
};