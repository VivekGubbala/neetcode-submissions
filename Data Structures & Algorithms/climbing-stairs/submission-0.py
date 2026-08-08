class Solution:
    def climbStairs(self, n: int) -> int:
        cache = {}

        def dfs(curr):
            if curr in cache:
                return cache[curr]
            if curr <= 2:
                return curr

            steps = dfs(curr-1) + dfs(curr-2)

            cache[curr]  = steps
            return steps
        
        return dfs(n)