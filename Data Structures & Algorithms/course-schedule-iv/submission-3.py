class Solution:
    def checkIfPrerequisite(self, numCourses: int, prerequisites: List[List[int]], queries: List[List[int]]) -> List[bool]:
        courses = { i: [] for i in range(numCourses)}
        visited = set()
        courseset = { i: set() for i in range(numCourses)}
        for a,b in prerequisites:
            courses[b].append(a)
        
        def dfs(node):
            
            if node in visited:
                return courseset[node].copy()
            visited.add(node)
            # if courses[node] == []:
            #     courseset[node] = set(deps)
            #     return set()
            
            deps = set(courses[node])
            for i in courses[node]:

                deps.update(dfs(i))

            courseset[node] = set(deps)
            return deps.copy()

        # courseset = { i: set(dfs(i)) for i in range(numCourses)}
        for i in range(numCourses):
            if i not in visited:
                dfs(i)



        res = []
        for a,b in queries:
            res.append(True if a in courseset[b] else False)
        return res
                