/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) 
    	return null;
    if (!head.next) 
    	return head;
    var prev = head;
    var cur = head.next;
    prev.next = null;

    while(cur){
    	var temp = cur;
    	cur = cur.next;

    	temp.next = prev;
    	prev = temp;
    }
    return prev;
};