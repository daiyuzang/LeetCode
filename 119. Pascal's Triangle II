/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var arr = [];
    rowIndex = rowIndex + 1;
	for (var i = 0; i < rowIndex; i++) {
		arr[i] = [];
	}
    for (var i = 0; i < rowIndex; i++) {
    	for (var j = 0; j <= i; j++) {
    		arr[i][j] = 1;
    	}
    }
    if (rowIndex > 2) {
    	for (var i = 2; i < rowIndex; i++) {
	    	for (var j = 1; j < i; j++) {
	    		arr[i][j] = parseInt(arr[i - 1][j - 1]) + parseInt(arr[i - 1][j]);
	    	}
	    }
    }
    return arr[rowIndex - 1];
};