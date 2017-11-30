/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    return isArrange(n);
    function isArrange(n){
        var num = 0;
        for(let i = 1; i <= n; i++){
            if(n - i >= 0){
                num++;
                n = n - i;
            }
        }
        return num;
    }
};