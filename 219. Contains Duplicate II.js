/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
	if(!nums.length || nums.length === 1) return false;
    if(k <= 0) return false;
    var arr = {}, m;
    for (var i = 0; i < nums.length; i++) {
    	if (arr[nums[i]] === undefined) {
    		arr[nums[i]] = i;
    	}
    	else{
    		m = Math.abs(arr[nums[i]] - i);
    		console.log(m);
    		break;
    	}
    }
    if (m <= k) return true;
    else   return false;
};