/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var result = 0;
    for (var i = 0; i < 32; i++) {
    	result |= (n >> i & 1) << (31 - i);
    }
    return result >>> 0;//>>>为计算无符号整数
};