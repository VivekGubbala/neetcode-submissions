class Solution:
    def longestPalindrome(self, s: str) -> str:
        maxstr = s[:1]
        def helper(l,r):
            nonlocal maxstr
            if l<0 or r >=len(s) or s[l] != s[r]:
                return
            maxstr = s[l:(r+1)] if (r-l +1) > len(maxstr) else maxstr
            # if l == 0 or r == (len(s) -1):
            #     return 

            helper(l-1, r+1)
            return
        if len(s) >= 1:
            helper(0, 1)
        
        for i in range(1,len(s)-1):
            if s[i] == s[i+1]:
                helper(i, i+1)
                # continue
            if s[i-1] == s[i+1]:
                helper(i-1, i+1)

        return maxstr