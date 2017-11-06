/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    var obj = new Object();
    for (var i = 0; i < s.length; i++) {
        if (obj[s[i]] == undefined) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]]++;
        }
    }
    for (var j = 0; j < t.length; j++) {
        if (obj[t[j]] == undefined)
            return false;
        else obj[t[j]]--;
    }
    for (var i = 0; i < s.length; i++) {
        if (obj[s[i]])
            return false;
    }
    return true;
};