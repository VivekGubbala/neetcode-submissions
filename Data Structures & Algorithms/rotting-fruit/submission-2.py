class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])

        visited = set()
        time = 0
        q = deque()

        def spread(i,j):
            if i < 0 or i >= rows or j < 0 or j >= cols or grid[i][j] == 0 or (i,j) in visited:
                return
            
            q.append((i,j))
            visited.add((i,j))


        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 2:
                    q.append((i,j))
                    visited.add((i,j))
        
        while q:
            quelen = len(q)
            for _ in range(quelen):
                pos = q.popleft()

                grid[pos[0]][pos[1]] = 2
                # visited.add((i,j))

                spread(pos[0] +1, pos[1])
                spread(pos[0]-1, pos[1])
                spread(pos[0], pos[1] +1)
                spread(pos[0], pos[1]-1)

            time += 1

        if time > 0:
            time -= 1

        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 1:
                    return -1
        
        return time