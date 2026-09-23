class Solution:
    def splitArray(self, nums: List[int], k: int) -> int:
        def isSplitPossible(target):
            currSum = 0
            partition = 1
            for num in nums:
                currSum += num
                if currSum > target:
                    currSum = num
                    partition += 1
            
            return  partition <=k 

        l, r = max(nums), sum(nums)
        res = r
        while l <= r:
            p = (l+r)//2
            
            if isSplitPossible(p):
                res = p
                r = p -1
            else:
                l = p +1
        

        return res

