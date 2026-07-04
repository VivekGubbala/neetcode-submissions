class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        visitedLand = set()

        def dfs(i,j):
            if i >= len(grid) or i < 0 or j >= len(grid[0]) or j < 0 \
                or grid[i][j] == '0' or (i,j) in visitedLand:
                return
            visitedLand.add((i,j))
            dfs(i+1, j)
            dfs(i, j+1)
            dfs(i-1, j)
            dfs(i, j-1)
            return
        
        res = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == '1' and (i,j) not in visitedLand:
                    res += 1
                    dfs(i,j)

                    
        return res
        