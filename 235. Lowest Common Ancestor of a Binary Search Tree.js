/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    //二叉排序树！根节点在排序中间
    if (!root || !p || !q)
        return null;
    if (Math.max(p.val, q.val) < root.val)
        return lowestCommonAncestor(root.left, p, q);
    else if (Math.min(p.val, q.val) > root.val)
        return lowestCommonAncestor(root.right, p, q);
    else
        return root;
};