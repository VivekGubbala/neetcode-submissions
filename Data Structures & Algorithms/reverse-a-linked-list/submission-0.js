/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let current = head;
        if(!head){
            return head
        }
        while(current.next){
            let temp = current.next;
            // prev = current
            current.next = prev
            prev = current
            current = temp;
        }
        current.next = prev
        return current
    }
}
