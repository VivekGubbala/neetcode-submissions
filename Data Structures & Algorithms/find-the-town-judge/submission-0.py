class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        indegree = [0 for i in range(n)]
        outdegree = [0 for i in range(n)]

        for i in range(len(trust)):
            indegree[trust[i][1] -1 ] += 1
            outdegree[trust[i][0] -1 ] += 1

        for i in range(n):
            if indegree[i] == (n-1) and outdegree[i] == 0:
                return i+1

        return -1 
        
