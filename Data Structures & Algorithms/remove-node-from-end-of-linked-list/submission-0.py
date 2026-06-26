# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        length = 0
        itr = head
        while itr:
            length += 1
            itr = itr.next
        targetNode = length - n
        itr = head
        if targetNode == 0:
            head = head.next
            return head
        while targetNode > 1:
            itr = itr.next
            targetNode -= 1
        itr.next = itr.next.next
        return head