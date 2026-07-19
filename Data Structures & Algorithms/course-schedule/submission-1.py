class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        courses = { i: [] for i in range(numCourses)}

        visited = set()

        for ele, prereq in prerequisites:
            courses[ele].append(prereq)

        def dfs(node):
            if courses[node] == []:
                return True
            
            if node in visited:
                return False
            
            visited.add(node)
            for prereq in courses[node]:
                if not dfs(prereq):
                    return False
            courses[node] = []
            return True 

        
        for i in courses:
            if not dfs(i):
                return False
        return True