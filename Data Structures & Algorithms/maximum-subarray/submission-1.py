class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxsum = nums[0]
        currsum = nums[0]

        i = 1
        while i < len(nums):
            
            if currsum < 0:
                currsum=nums[i]
            else:
                currsum += nums[i]
            maxsum = max(currsum, maxsum)
            i += 1
        
        return maxsum