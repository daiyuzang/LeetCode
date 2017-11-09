/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
    var m = 0;
    while (num != 0 && m == 0) {
        if (num == 1) return true;
        else {
            m = num % 4;
            num /= 4;
        }
    }
    return false;
};