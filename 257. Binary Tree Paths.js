/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    var ret = [];
    var mark = "->";
    if (!root) return ret;
    deepSeach(root);
    return ret;

    function deepSeach(root) {
        if (!root.left && !root.right) {
            ret.push(root.val + "");
            return;
        }
        if (root.left) {
            root.left.val = root.val + mark + root.left.val;
            deepSeach(root.left);
        }
        if (root.right) {
            root.right.val = root.val + mark + root.right.val;
            deepSeach(root.right);
        }
    }
};