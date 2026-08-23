class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:
        cache = { 0: 1}
        minele = min(nums)


        def dfs(target):
            
            if target in cache:
                return cache[target]
            if target < minele:
                return 0
            total = 0
            for i in nums:
                total += dfs(target-i)
            
            cache[target] = total

            return total

        return dfs(target)