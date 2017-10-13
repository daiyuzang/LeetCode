/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var len = s.length;
    var num = 0, j = 0;
    for (var i = len - 1; i >= 0; i--) {
    	var code = s[i].charCodeAt() - "A".charCodeAt() + 1;
    	num += code * Math.pow(26, j);
    	j++;
    }
    return num;
};