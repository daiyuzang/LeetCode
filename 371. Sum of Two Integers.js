/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    if (a === 0) return b;
    var x = a ^ b;
    var sum = (a & b) << 1;
    return getSum(sum, x);
};