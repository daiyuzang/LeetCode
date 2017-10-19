/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var num = n.toString(2);
	var flag = 0;
	for (var i = 0; i < num.length; i++) {
		if (num[i] === "1") 
			flag++;		    	
	}
	return flag;
};