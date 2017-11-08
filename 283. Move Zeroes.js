/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var k = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            nums.splice(i, 1);
            k++;
            i--;
        }
    }
    console.log(nums);
    while (k > 0) {
        nums.splice(nums.length, 0, 0);
        k--;
    }
};