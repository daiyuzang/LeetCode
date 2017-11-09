/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    var m = 0;
    while (n != 0 && m == 0) {
        if (n == 1) return true;
        else {
            m = n % 3;
            n /= 3;
        }
    }
    return false;
};