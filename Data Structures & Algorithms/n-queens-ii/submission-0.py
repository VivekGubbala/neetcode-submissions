class Solution:
    def totalNQueens(self, n: int) -> int:
        result = 0
        col = set()
        posDiagnol = set()
        negDiagnol = set()

        def backtrack(r):
            if r == n:
                nonlocal result
                result += 1
                return
            
            for c in range(n):
                if c in col or (r+c) in posDiagnol or (r-c) in negDiagnol:
                    continue
                col.add(c)
                posDiagnol.add(r+c)
                negDiagnol.add(r-c)
                backtrack(r+1)
                col.remove(c)
                posDiagnol.remove(r+c)
                negDiagnol.remove(r-c)

            return
        backtrack(0)
        return result
