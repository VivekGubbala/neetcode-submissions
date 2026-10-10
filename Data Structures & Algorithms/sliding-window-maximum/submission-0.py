class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        q = deque()
        l, r = 0, 0
        res = []

        while r < len(nums):

            #exits the elements from window
            if q and l > q[0]:
                q.popleft()
            
            while q and nums[q[-1]] < nums[r]:
                q.pop()
            q.append(r)

            if r > k -2:
                res.append(nums[q[0]])
                r+=1
                l+=1
            else:
                r+=1
            



        return res