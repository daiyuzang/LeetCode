/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    var len = nums.length;
    var sum = 0;
    for (var i in nums) {
        sum += nums[i];
    }
    return (len * (len + 1)) / 2 - sum;
};