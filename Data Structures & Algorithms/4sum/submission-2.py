class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        res = []
        quadpair = []
        nums.sort()
        def ksum(k, start, target):
            if k > 2:
                for i in range(start, len(nums) - k +1):
                    if i> start and nums[i] == nums[i-1]:
                        continue
                    quadpair.append(nums[i])
                    ksum(k-1, i+1, target - nums[i])
                    quadpair.pop()

                return


            i = start
            j = len(nums) -1
            while i<j:
                total = nums[i] + nums[j]
                if total > target:
                    j-=1
                elif total < target:
                    i+=1
                else:
                    quadpair.append(nums[i])
                    quadpair.append(nums[j])
                    res.append(quadpair.copy())
                    quadpair.pop()
                    quadpair.pop()
                    i+=1
                    while i<j and nums[i]==nums[i-1]:
                        i+=1
            return
        ksum(4,0,target)
        return res
        