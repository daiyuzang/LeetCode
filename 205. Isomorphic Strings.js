/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var mapS = {};
    var mapT = {};

    for(var i in s){
    	var vectorS = s[i];
    	var vectorT = t[i];

    	if (!mapS[vectorS]) {
    		mapS[vectorS] = vectorT;
    	}else if(mapS[vectorS] !== vectorT){
    		return false;
    	}

    	if (!mapT[vectorT]) {
    		mapT[vectorT] = vectorS;
    	}else if(mapT[vectorT] !== vectorS){
    		return false;
    	}
    }
    return true;
};