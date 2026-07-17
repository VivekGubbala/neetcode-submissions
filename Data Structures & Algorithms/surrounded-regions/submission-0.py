class Solution:
    def solve(self, board: List[List[str]]) -> None:
        rows, cols = len(board), len(board[0])
        marked = set()
        # need to check all edge o's
        queue = deque()

        for i in range(cols):
            if board[0][i] == "O":
                queue.append((0,i))
            if board[rows-1][i] == "O":
                queue.append((rows-1,i))

        for i in range(1, rows-1):
            if board[i][0] == "O":
                queue.append((i,0))
            if board[i][cols-1] == "O":
                queue.append((i, cols -1))


        def capture(i,j):
            if i < 0 or i >= rows or j < 0 or j >= cols or board[i][j] == "X" or (i,j) in marked:
                return
            marked.add((i,j))
            capture(i+1, j)
            capture(i-1, j)
            capture(i, j+1)
            capture(i, j-1)
            return

        while len(queue):
            cell = queue.popleft()
            capture(cell[0], cell[1])


        for i in range(rows):
            for j in range(cols):
                if (i, j) not in marked and board[i][j] == "O":
                    board[i][j] = "X"

        return
        