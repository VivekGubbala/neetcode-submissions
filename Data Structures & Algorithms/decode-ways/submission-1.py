class Solution:
    def numDecodings(self, s: str) -> int:
        cache = { len(s): 1 }
        def dfs(curr_idx):
            if curr_idx in cache:
                return cache[curr_idx]
            if curr_idx > len(s) or s[curr_idx] == "0":
                return 0
            
            res = dfs(curr_idx+ 1)
            if (curr_idx +1) < len(s) and int(s[curr_idx] + s[curr_idx+1]) <= 26:
                res += dfs(curr_idx + 2)
            cache[curr_idx] = res
            return res

        return dfs(0)
        