class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        visited = set()
        graph = { i: [] for i in range(n) } 

        for a,b in edges:
            graph[a].append(b)
            graph[b].append(a)
        
        def dfs(node, prev):
            if node in visited:
                return
            visited.add(node)

            for i in graph[node]:
                if i == prev:
                    continue
                dfs(i, node)

            return 
            ...

        count = 0

        for i in range(n):
            if i in visited:
                continue
            count += 1
            dfs(i, -1)
        
        return count