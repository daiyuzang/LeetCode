/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    var arrs = [];
    while (head) {
        arrs.push(head.val);
        head = head.next;
    }
    for (var i = 0, j = arrs.length - 1; i < arrs.length / 2; i++) {
        if (arrs[i] !== arrs[j])
            return false;
        j--;
    }
    return true;
};