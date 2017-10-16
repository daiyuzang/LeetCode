/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var num = 0;
    while(parseInt(n / 5)){
    	n = parseInt(n / 5);
    	num += n;
    }
    return num;
};