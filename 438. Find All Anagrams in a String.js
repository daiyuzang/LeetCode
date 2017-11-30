/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var num = [];
    var nump = p.length;
    var left = 0, right = 0;
    var objp = {};
    for(let i = 0; i < nump; i++){
        if(!objp[p[i]])
            objp[p[i]]=1;
        else 
            objp[p[i]]++;
    }
    for(; right < s.length; right++){
        objp[s[right]]--;
        if(objp[s[right]] >= 0)
            nump--;
        if(right - left === p.length - 1){
            if(nump == 0)
                num.push(left);
            if(objp[s[left]] >= 0){
                nump++;
            }
            objp[s[left]]++;
            left++;
        }
    }
    return num;
};