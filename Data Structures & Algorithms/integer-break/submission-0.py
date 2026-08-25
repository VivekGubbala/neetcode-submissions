class Solution:
    def integerBreak(self, n: int) -> int:
        dp = {1:1}
        def dfs(target):
            if target in dp:
                return dp[target]
            
            dp[target] = 0 if target == n else target

            for i in range(1, target):
                dp[target] = max(dp[target], dfs(i)*dfs(target-i))
            
            return dp[target]

        return dfs(n)