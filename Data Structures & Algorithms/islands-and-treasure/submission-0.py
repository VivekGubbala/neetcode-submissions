class Solution:
    def islandsAndTreasure(self, grid: List[List[int]]) -> None:
        rows, cols = len(grid), len(grid[0])
        visited = set()
        q = deque()
        dis = 0

        def move(i, j):
            if i < 0 or i >=rows or j < 0 or j >= cols or grid[i][j] == -1 or (i , j) in visited:
                return
            visited.add((i,j))
            # grid[i][j] = dis
            q.append((i, j))

        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 0:
                    q.append((i, j))
                    visited.add((i,j))
        
        while q:
            queueLen = len(q)
            for _ in range(queueLen):
                item = q.popleft()
                grid[item[0]][item[1]] = dis

                move(item[0] + 1, item[1])
                move(item[0], item[1] + 1)
                move(item[0] - 1, item[1])
                move(item[0], item[1] -1) 



            dis += 1