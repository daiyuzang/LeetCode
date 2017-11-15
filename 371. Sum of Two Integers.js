/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    if (a === 0) return b;
    var x = a ^ b;
    var sum = (a & b) << 1;
    return getSum(sum, x);
};
//计算a+b时，当a、b按位计算没有进位时，可直接计算两位数的异或值；
//当产生进位时，直接将进位左移一位（即：乘2）
//再将两次运算得到的结果循环上述操作，直到两位数没有进位，即：进位为0，便可得到结果！