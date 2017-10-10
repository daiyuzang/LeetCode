/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var patt = /[a-z]|[A-Z]|[0-9]/g;
    var result = patt.exec(s);
    var str = "";
    while(result){
    	str += result[0];
   	 	result = patt.exec(s);
    }
    str = str.toLowerCase();
    for (var i = 0; i < str.length / 2; i++) {
    	if (str[i] !== str[str.length - 1 - i]) 
    		return false;
    }
    return true;
};