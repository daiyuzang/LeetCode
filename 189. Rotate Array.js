/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	var tmp = [];
	var k;
	k = k % nums.length;
	if (k) 
		tmp.slice(-k);
	nums.splice(-k,k);
	//num.concat(tmp);×！！！！因为在基本数据类型中，在复制之后数值互不印象，而引用类型会改变，因为指向同一地址！但是在函数中，全部采用值传递，concat函数是制造副本，原数组是不会改变的！所以只能用Array原生属性做答。
	Array.prototype.unshift.apply(nums,tmp);
};

//LeetCode测试只能这样测试！而不会进入函数输出答案！
var a = [2,23,45,1,5,12,7];
rotate(a,2);
console.log(a);