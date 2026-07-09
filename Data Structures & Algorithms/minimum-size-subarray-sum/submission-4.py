class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        l,r, total=0,0,0

        while r < len(nums) and total < target:
            total +=  nums[r]
            r+= 1
        res = r-l
        if total < target:
            return 0

        while r < len(nums) or (l < r and total > target):
            total -= nums[l]
            l += 1
            while r < len(nums) and total < target:
                total +=  nums[r]
                r+= 1
            if total >= target:
                res = min(res, r-l)

        return res
        