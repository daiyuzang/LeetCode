/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var binaryTreeHeight = function(root){
    if(!root)
        return 0;
    return 1 + Math.max(binaryTreeHeight(root.left),binaryTreeHeight(root.right));
}
var isBalanced = function(root) {
    if(!root)
        return true;
    var lh = binaryTreeHeight(root.left);
    var rh = binaryTreeHeight(root.right);
    
    if(Math.abs(lh - rh) <= 1){
        return isBalanced(root.left) && isBalanced(root.right);
    }
    else{
        return false;
    }
};
