class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        remainder = k % len(nums)
        temp = [*nums[len(nums)-remainder:len(nums)], *nums[0: len(nums)-remainder]]
        for i in range(len(nums)):
            nums[i] = temp[i]