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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1) {
            return list2
        }
        if (!list2) {
            return list1
        }
        let newHead = list1.val <= list2.val ? list1 : list2;
        if(list1.val <= list2.val){
           newHead =  list1
           list1 = list1.next
        }else{
            newHead = list2
            list2 = list2.next
        }
        let current = newHead;
        while(list1 && list2){
            if(list1.val <= list2.val){
                current.next =  list1
                current = list1
                list1 = list1.next
            }else{
                current.next =  list2
                current = list2
                list2 = list2.next
            }
        }
        current.next = list1 ? list1: list2

        
        return newHead;
    }
}
