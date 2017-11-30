/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    chars.sort(function(val1,val2){
        return val1.charCodeAt() - val1.charCodeAt();
    });
    var flag = chars[0];
    var obj = {};
    var num = 0;
    for(let i = 0; i < chars.length; i++){
        if(flag === chars[i]){
            num++;
            obj[chars[i]] = num;
        }
        else{
            flag = chars[i];
            i--;
            num = 0;
        }
        chars[i] = "";
    }
    var len = Object.keys(obj).length;
    for(var i in obj){
        len += obj[i].toString().length;
        if(obj[i] === 1)
            len--;
        if(obj[i] !== 1){
            chars.push(i);
            chars.push(obj[i].toString());
        }else{
            chars.push(i);
        }
    }
    return len;
};