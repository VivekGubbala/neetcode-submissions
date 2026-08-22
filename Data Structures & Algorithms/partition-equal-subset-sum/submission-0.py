class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        dp = set([0])
        total = sum(nums)
        if total%2 != 0:
            return False
        target = total//2

        for i in nums:
            for ele in dp.copy():
                newSum = ele + i
                if newSum == target:
                    return True
                if newSum not in dp:
                    dp.add(newSum)
        
        return False



