class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        courses = { i: [] for i in range(numCourses) }

        visited = set()

        for course, preReq in  prerequisites:
            courses[course].append(preReq)

        res = []

        def dfs(node):
            if courses[node] == []:
                if node not in visited:
                    res.append(node)
                    visited.add(node)
                return True
            
            if node in visited:
                return False
            
            visited.add(node)

            for i in courses[node]:
                if not dfs(i):
                    return False

            courses[node] = []
            res.append(node)
            return True
            ...
        
        for i in courses:
            if not dfs(i):
                return []

        return res