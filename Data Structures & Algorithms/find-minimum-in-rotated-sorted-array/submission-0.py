class Solution:
    def findMin(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]

        if nums[0] < nums[-1]:
            return nums[0]

        l,r = 0, len(nums) -1

        while l<r:
            p = (l+r)//2
            if r - l ==1:
                break
            if nums[p] < nums[r]:
                r = p
            else:
                l = p
        

        return nums[r]