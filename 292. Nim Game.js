/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
    //1=>true
    //2=>true
    //3=>true
    //4=>false
    //5=>true
    //6=>true
    //7=>true
    //8=>false
    //...
    //观察规律可得：4的倍数颗石子A均不能获胜
    return n % 4 != 0;
};