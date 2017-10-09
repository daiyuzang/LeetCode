/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	var arr = [];
	for (var i = 0; i < numRows; i++) {
		arr[i] = [];
	}
    for (var i = 0; i < numRows; i++) {
    	for (var j = 0; j <= i; j++) {
    		arr[i][j] = 1;
    	}
    }
    if (numRows > 2) {
    	for (var i = 2; i < numRows; i++) {
	    	for (var j = 1; j < i; j++) {
	    		arr[i][j] = parseInt(arr[i - 1][j - 1]) + parseInt(arr[i - 1][j]);
	    	}
	    }
    }
    return arr;
};