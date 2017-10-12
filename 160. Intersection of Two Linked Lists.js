/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA == null && headB == null) return null;
    var listA = new ListNode();
    var listB = new ListNode();
    listA = headA;
    listB = headB;
    while(listA && listB){//同一样的长度，一定会同时为null，否则肯定不对
    	if (listA == listB) return listB;//假如就一条链表，那么第一个就是所求！
    	listA = listA.next;
    	listB = listB.next;
    	if (listA == listB) return listB;
    	if (!listA) listA = headB;//listA、listB都已经为null，所以只能将其赋值
    	if (!listB) listB = headA;
    }
    return null;
};