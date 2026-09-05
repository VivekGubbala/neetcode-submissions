class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        dp = {}
        s1_len = len(s1)
        s2_len = len(s2)
        s3_len = len(s3)
        if (s1_len + s2_len) != s3_len:
            return False

        if s3_len == 0:
            return True
        s1 = "0"+s1
        s2 = "0"+s2

        def dfs(i, j, str1Increment):
            if (i,j) in dp:
                return dp[(i,j)]
    
            if i > s1_len or j > s2_len:
                return False
            if str1Increment and s1[i] != s3[i+j-1]:
                return False
            if not str1Increment and s2[j] != s3[i+j-1]:
                return False

            if i == s1_len and j == s2_len:
                return True

            dp[(i,j)] = dfs(i+1, j, True) or dfs(i, j+1, False)

            return dp[(i,j)]
        
        return dfs(1, 0, True) or dfs(0,1, False)
            
