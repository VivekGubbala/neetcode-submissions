class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        r = len(grid)
        c = len(grid[0])
        sum_cache = {
            f"{r-1},{c-1}": grid[r-1][c-1]
        }

        def dfs(i,j):
            key = f"{i},{j}"
            if key in sum_cache:
                return sum_cache[key]
            
            if i>= r or j >= c:
                return 500

            rightmove = dfs(i+1, j)
            downmove = dfs(i, j+1)
            sum_cache[key] = min(rightmove, downmove) + grid[i][j]
            return sum_cache[key]
            # if rightmove != None and downmove != None:
            #     sum_cache[key] = min(rightmove, downmove) + grid[i][j]
            #     return sum_cache[key]
            # if rightmove != None:
            #     sum_cache[key] = rightmove + grid[i][j]
            # if downmove != None:
            #     sum_cache[key] = downmove + grid[i][j]

        return dfs(0,0)