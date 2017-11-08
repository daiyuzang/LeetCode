/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        var left = 0;
        var right = n - 1;
        while (left <= right) {
            var mid = (right - left) / 2 + left;
            if (isBadVersion(mid))
                right = mid; //不能加一，因为可能就是第一个badVersion
            else
                left = mid + 1;
        }
        return right;
    };
};

function isBadVersion(n) {
    return true;
}