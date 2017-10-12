/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var l = 0, r = numbers.length;
    while(l < r){
    	var sum = numbers[l] + numbers[r];
    	if (sum == target) return [l + 1, r + 1];
    	if (sum < target) l++;
    	else r--;
    }
};