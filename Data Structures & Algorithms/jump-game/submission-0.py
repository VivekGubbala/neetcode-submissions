class Solution:
    def canJump(self, nums: List[int]) -> bool:
        i = len(nums) -1
        leapLen = 0
        while i >=0:
            if i == 0 and leapLen <= nums[i]:
                return True
            if leapLen <= nums[i]:
                leapLen = 0
            i -= 1
            leapLen +=1
        return False