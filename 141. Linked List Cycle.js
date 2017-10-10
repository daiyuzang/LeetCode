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
var hasCycle = function(head) {
    var p = ListNode();
    var q = ListNode();
    p = q = head;
    while(p !== null && q !== null && q.next !== null){
    	p = p.next;
    	q = q.next.next;
    	if (p === q) {
    		return true;
    	}
    }
    return false;
};