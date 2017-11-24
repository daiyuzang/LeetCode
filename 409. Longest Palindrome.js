/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    var obj = {};
    for (var i = 0; i < s.length; i++) {
        if (obj[s[i]] === undefined) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]]++;
        }
    }
    var num = 0;
    for (var i = 0; i < s.length; i++) {
        if (parseInt(obj[s[i]] % 2) === 0) {
            num += obj[s[i]];
        } else if (parseInt(obj[s[i]] / 2) !== 0) {
            num += parseInt(obj[s[i]] / 2) * 2;
        }
    }
    for (var i = 0; i < s.length; i++) {
        if (obj[s[i]] === 1) {
            num += 1;
            break;
        }
    }
    return num;
};