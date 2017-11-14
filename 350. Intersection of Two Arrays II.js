/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort(function (val1, val2) {
        return val1 - val2;
    });
    nums2.sort(function (val1, val2) {
        return val1 - val2;
    });
    var arr = [];
    var flag;
    for (var i = 0, j = 0; i < nums1.length && j < nums2.length;) {
        if (nums1[i] < nums2[j])
            i++;
        else if (nums1[i] > nums2[j])
            j++;
        else {
            arr.push(nums1[i]);
            i++;
            j++;
        }
    }
    return arr;
};