/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if(!root) return 0;
    var sum = nodeSum(root, 0, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
    return sum;
    function nodeSum(root, current, sum){
        if(!root) return 0;
        current += root.val;
        return (current === sum) + nodeSum(root.left, current, sum) + nodeSum(root.right, current, sum);
    }
};
