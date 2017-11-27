/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    var arr = s.split(" ");
    var num = 0;
    for (var i in arr) {
        if (arr[i] != "") {
            num++;
        }
    }
    return num;
};