class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        rows, cols = len(heights), len(heights[0])

        visitedP = set()
        visitedA = set()

        def move(i,j, prevH, isPacific):
            if i >=rows or i<0 or j >= cols or j<0 or heights[i][j] < prevH:
                return
            if isPacific:
                if (i,j) in visitedP:
                    return
                visitedP.add((i,j))
            else:
                if (i,j) in visitedA:
                    return
                visitedA.add((i,j))
            move(i+1,j,heights[i][j], isPacific)
            move(i-1,j,heights[i][j], isPacific)
            move(i,j+1,heights[i][j], isPacific)
            move(i,j-1,heights[i][j], isPacific)

        #pacific
        for i in range(cols):
            move(0, i, 0, True)
        
        for i in range(rows):
            move(i, 0, 0, True)

        #atlantic
        for i in range(cols):
            move(rows-1, i, 0, False)
        
        for i in range(rows):
            move(i, cols-1, 0, False)

        
        res = []

        for i in range(rows):
            for j in range(cols):
                if (i, j) in visitedP and (i,j) in visitedA:
                    res.append([i,j])
        return res