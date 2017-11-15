/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    var objran = {};
    var objmag = {};
    for (var i = 0; i < ransomNote.length; i++) {
        if (objran[ransomNote[i]] == undefined) {
            objran[ransomNote[i]] = 1;
        } else {
            objran[ransomNote[i]]++;
        }
    }
    for (var j = 0; j < magazine.length; j++) {
        if (objmag[magazine[j]] == undefined) {
            objmag[magazine[j]] = 1;
        } else {
            objmag[magazine[j]]++;
        }
    }
    if (objran.length !== objmag.length) return false;
    for (var i = 0; i < ransomNote.length; i++) {
        if (objmag[ransomNote[i]] === undefined)
            return false;
        if (objran[ransomNote[i]] > objmag[ransomNote[i]])
            return false;
    }
    return true;
};