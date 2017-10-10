/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort(function(val1,val2){
    	return val1 - val2;
    });
    for (var i = 0; i < nums.length; i++) {
    	if (nums[i] === nums[i + 1]) 
    		i++;
    	else
    		return nums[i];
    }
};