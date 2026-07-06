class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        visitedCell = set()
        maxArea = 0
        def dfs(i, j):
            if i >= len(grid) or j >= len(grid[0]) or i < 0 or j < 0 \
                or grid[i][j] == 0 or (i,j) in visitedCell:
                return 0
            visitedCell.add((i,j))
            area = 1
            area += dfs(i+1, j)
            area += dfs(i, j+1)
            area += dfs(i, j-1)
            area += dfs(i-1, j)
            return area

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 1 and (i,j) not in visitedCell:
                    newArea = dfs(i,j)
                    maxArea = newArea if newArea > maxArea else maxArea
            
        return maxArea