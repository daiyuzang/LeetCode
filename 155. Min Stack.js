/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.minNum = [];
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    var min = this.getMin();

    this.stack.push(x);
    if (min >= x || min === undefined) {
    	this.minNum.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	var val = this.stack.pop();
	if (this.getMin() === val) 
		this.minNum.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minNum[this.minNum.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */