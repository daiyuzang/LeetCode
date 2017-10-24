/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var arr = [];
    for (var i = 2; i < n; i++) {
    	arr[i] = false;
    }
    for (var i = 2; i * i < n; i++) {
    	if (!arr[i]) {
    		for (var j = i; j * i < n; j++) {
	    		arr[i * j] = true;
	    	}
    	}
    }
    var sum = 0;
    for (var i = 2; i < n; i++) {
    	if (!arr[i]) 
    		sum++;
    }
    return sum;
};