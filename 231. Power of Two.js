/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    var m;
    if (n <= 0)
        return false;
    while (n > 1) {
        m = n % 2;
        n /= 2;
        if (m === 1)
            return false;
    }
    return true;
};