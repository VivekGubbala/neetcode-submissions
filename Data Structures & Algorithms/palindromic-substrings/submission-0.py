class Solution:
    def countSubstrings(self, s: str) -> int:
        count = 0
        def helper(l,r):
            nonlocal count
            if l < 0 or r >= len(s) or s[l] != s[r]:
                return 
            
            count +=1
            helper(l-1, r+1)
            return

        for i in range(len(s)):
            if (i+1) < len(s) and s[i] == s[i+1]:
                helper(i, i+1)

            helper(i, i)
        
        return count
