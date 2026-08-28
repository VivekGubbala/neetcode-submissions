class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        r = len(obstacleGrid)
        c = len(obstacleGrid[0])
        if obstacleGrid[r-1][c-1] == 1:
            return 0
        cache = {
            f"{r-1},{c-1}": 1
        }
        def dfs(i,j):
            key = f"{i},{j}"
            if key in cache:
                return cache[key]

            if i >=r or j >=c or obstacleGrid[i][j] ==1:
                return 0

            cache[key] = dfs(i, j+1) + dfs(i+1, j)
            return cache[key]
        return dfs(0,0)
