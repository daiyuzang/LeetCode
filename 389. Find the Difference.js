/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    var objs = {};
    var objt = {};
    for (var i = 0; i < s.length; i++) {
        if (objs[s[i]] === undefined) {
            objs[s[i]] = 1;
        } else {
            objs[s[i]]++;
        }
    }
    for (var i = 0; i < t.length; i++) {
        if (objt[t[i]] === undefined) {
            objt[t[i]] = 1;
        } else {
            objt[t[i]]++;
        }
    }
    for (var i = 0; i < t.length; i++) {
        if (objs[t[i]] !== objt[t[i]])
            return t[i];
    }
};