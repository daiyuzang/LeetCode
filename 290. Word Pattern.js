/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    var arr = [];
    arr = str.split(" ");
    var obj = {};
    var o = {};
    if (pattern.length !== arr.length) return false;
    for (var i = 0; i < pattern.length; i++) {
        if (obj[pattern[i]] === undefined) {
            obj[pattern[i]] = arr[i];
        } else if (obj[pattern[i]] !== arr[i]) {
            return false;
        }
        if (o[arr[i]] === undefined) {
            o[arr[i]] = pattern[i];
        } else if (o[arr[i]] !== pattern[i]) {
            return false;
        }
    }
    return true;
};