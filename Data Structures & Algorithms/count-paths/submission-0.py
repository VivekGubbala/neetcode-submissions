class Solution:
    def uniquePaths(self, m: int, n: int) -> int:

        cache = {
            f"{m-1},{n-1}": 1 
        }
        def dfs(i,j):
            key = f"{i},{j}"
            if key in cache:
                return cache[key]
            if i >= m or j >= n:
                return 0
            
            cache[key] = dfs(i, j+1) + dfs(i+1, j)
            return cache[key]
        
        return dfs(0,0)


        