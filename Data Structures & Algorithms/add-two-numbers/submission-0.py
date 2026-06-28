# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        res = ListNode(None)
        carry = None
        curr = res
        l1Curr, l2Curr = l1, l2
        while l1Curr or l2Curr or carry:
            total = 0
            if l1Curr:
                total += l1Curr.val
                l1Curr = l1Curr.next
            if l2Curr:
                total += l2Curr.val
                l2Curr = l2Curr.next
            if carry:
                total += carry
                carry = None
            if total/10 >= 1:
                carry = math.floor(total/10)
            curr.next = ListNode(total%10)
            curr = curr.next

        return res.next