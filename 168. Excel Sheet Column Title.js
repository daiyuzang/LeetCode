/**
 * @param {number} n
 * @return {string}
 */
//https://discuss.leetcode.com/topic/6245/python-solution-with-explanation
//以上链接为数字与字符的对照表
var convertToTitle = function(n) {
    /*var str = "";
    while(n>0){
    	str = String.fromCharCode("A".charCodeAt() + parseInt((--n) % 26)) + str;
    	n = parseInt(n / 26);
    }
    return str;*/
      if (n <= 0) return "";
    if (n <= 26) return String.fromCharCode("A".charCodeAt() + n - 1);
    return convertToTitle(n % 26 ? parseInt(n / 26) : parseInt(n / 26 - 1)) + convertToTitle(n % 26 ? parseInt(n % 26) : 26);
};