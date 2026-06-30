# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        prev = None
        curr = head
        currIdx = 1
        while  currIdx < left:
            prev = curr
            curr = curr.next
            currIdx += 1

        startHead = curr
        startHeadPrev = prev
        # handle case of 1
        # print("hell", startHead.val, startHeadPrev)
        while currIdx <= right:
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
            currIdx += 1
        # curr
        # temp = curr.next
        # print("hell", prev.val)
        startHead.next = curr
        # head = prev 
        if startHeadPrev:
            startHeadPrev.next = prev
        else:
            head = prev
        # curr.next = startHeadPrev

        return head

        
        