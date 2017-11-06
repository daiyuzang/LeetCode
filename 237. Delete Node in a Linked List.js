/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    //直接删除node节点，但是未给出head节点，只能直接删除此节点
    if (!node || !node.next) return null;
    node.val = node.next.val;
    node.next = node.next.next;
};