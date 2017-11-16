/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    var obj = {};
    for (var i = 0; i < s.length; i++) {
        if (obj[s[i]] === undefined) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]]++;
        }
    }
    for (var i = 0; i < s.length; i++) {
        if (obj[s[i]] === 1)
            return i;
    }
    return -1;
};