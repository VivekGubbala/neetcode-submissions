class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        dp = {}
        r= len(matrix)
        c = len(matrix[0])

        def dfs(i,j,prev):
            if i >= r or j >= c or i <0 or j <0 or prev >= matrix[i][j]:
                return 0
            if (i,j) in dp:
                return dp[(i,j)]
            dp[(i,j)] = max(dfs(i+1,j,matrix[i][j]), dfs(i-1,j,matrix[i][j]), dfs(i,j+1,matrix[i][j]), dfs(i,j-1,matrix[i][j])) + 1
            # print("hell", i, j, dp[(i,j)], prev)
            return dp[(i,j)]

        max_res = 0

        for i in range(r):
            for j in range(c):
                max_res = max(max_res, dfs(i,j,-1))


        return max_res
