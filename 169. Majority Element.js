/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  	nums.sort(function(val1,val2){
  		return val1 - val2;
  	});
  	var len = 0;
  	var num = nums[0];
  	for (var i = 0; i < nums.length; i++) {
  		if (num === nums[i]) {
  			len++;
  			if (len > nums.length / 2) 
  				return nums[i];
  			else 
  				continue;
  		}
  		else{
  			num = nums[i];
  			i--;
  			len = 0;
  		}
  	}
};