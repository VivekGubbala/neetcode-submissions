class Solution:
    def jump(self, nums: List[int]) -> int:
        if len(nums) <= 1:
            return 0
        l,r = 1, nums[0]

        count = 1

        p = nums[0]

        while p< len(nums)-1:
            
            for i in range(l,r+1):
                p = max(p, i+nums[i])
                if p >= len(nums) -1:
                    break
            count+=1
            l = r+1
            r = p

        return count
            