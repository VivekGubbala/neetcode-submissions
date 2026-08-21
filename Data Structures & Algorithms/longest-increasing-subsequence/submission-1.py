class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        maxRes = 0

        dp = [1] * len(nums)
        for i in range(len(nums)):
            j= 1
            currMax = 0
            while i-j >= 0:
                if nums[i-j] < nums[i]:
                    
                    dp[i] = max(currMax, 1 + dp[i-j])
                    currMax = dp[i]
                    # break
                j+=1
            maxRes = max(maxRes, dp[i])

        return maxRes
            

