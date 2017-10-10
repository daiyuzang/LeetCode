/**
 * @param {number[]} prices
 * @return {number}
 */
/*var maxProfit = function(prices) {
    var max = 0;
    for (var i = 0; i < prices.length; i++) {
    	for (var j = i + 1; j < prices.length; j++) {
    		if (prices[i] < prices[j]) {
    			if ((prices[j] - prices[i]) > max) {
    				max = prices[j] - prices[i];
    			}
    		}
    	}
    }
    return max;
};*/
var maxProfit = function(prices) {
	var min = Number.MAX_VALUE;
	var profit = 0;
	for (var i = 0; i < prices.length; i++) {
		if (prices[i] < min) {
			min = prices[i];
		}

		var calprofit = prices[i] - min;
		if (calprofit > profit) {
			profit = calprofit;
		}
	}
	return profit;
}