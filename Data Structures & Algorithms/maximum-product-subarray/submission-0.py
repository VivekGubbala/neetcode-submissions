class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        prevmin = prevmax = maxres = nums[0]

        for i in range(1, len(nums)):
             new_max = max(nums[i], prevmin * nums[i], prevmax*nums[i])
             new_min = min(nums[i], prevmin * nums[i], prevmax*nums[i])
             prevmax = new_max
             prevmin = new_min
             maxres = max(prevmax, maxres)

        return maxres