/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root)
        return null;
    var node = new TreeNode();
    node = root.left;
    root.left = root.right;
    root.right = node;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};