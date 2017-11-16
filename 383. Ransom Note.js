/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    var objran = {};
    for (var i = 0; i < ransomNote.length; i++) {
        if (objran[ransomNote[i]] === undefined) {
            objran[ransomNote[i]] = 1;
        } else {
            objran[ransomNote[i]]++;
        }
    }
    var str1, str2;
    for (var j = 0; j < magazine.length; j++) {
        if (objran[magazine[j]] === 0) {
            objran[magazine[j]] = 0;
        } else if (objran[magazine[j]] !== undefined) {
            objran[magazine[j]]--;
            magazine = magazine.slice(0, j - 1) + magazine.slice(j + 1, magazine.length);
        }
    }
    for (var i = 0; i < ransomNote.length; i++) {
        if (objran[magazine[j]] !== 0)
            return false;
    }
    return true;
};