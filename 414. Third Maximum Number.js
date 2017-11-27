/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    nums.sort(function (val1, val2) {
        return val2 - val1;
    });
    var num = 0;
    for (var i = 0; i <= nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            console.log(nums[i + 1]);
            if (nums[i + 1] === undefined && num < 3)
                return nums[i];
            else {
                num++;
                if (num === 3)
                    return nums[i + 1];
            }
        }
    }
};