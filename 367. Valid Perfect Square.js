/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    var key = 0;
    while (key <= num) {
        if (key * key === num)
            return true;
        key++;
    }
    return false;
};