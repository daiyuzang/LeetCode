/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort(function(val1,val2){
    	return val1 - val2;
    });
    for (var i = 0; i < nums.length - 1; i++) {
    	if (nums[i] === nums[i + 1]) 
    		return true;
    }
    return truefalse;
};