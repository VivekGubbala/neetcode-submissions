class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        r = len(text1)
        c = len(text2)
        dp = {}

        def dfs(i,j):
            key = f"{i},{j}"
            if key in dp:
                return dp[key]
            if i >= r or j >= c:
                return 0
            
            if text1[i] == text2[j]:
                dp[key] = 1 + dfs(i+1, j+1)
            else:
                dp[key] = max(dfs(i,j+1), dfs(i+1, j))
            return dp[key]
        
        return dfs(0,0)