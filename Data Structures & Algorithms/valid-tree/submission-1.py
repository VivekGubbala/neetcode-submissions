class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        tree = { i: [] for i in range(n) }

        for v1, v2 in edges:
            if v1 == v2:
                return False
            tree[v1].append(v2)
            tree[v2].append(v1)
        
        visited = set()

        def dfs(node, prev):
            if node in visited:
                return False
            
            visited.add(node)
            for i in tree[node]:
                if i == prev:
                    continue
                if not dfs(i, node):
                    return False
            
            return True
            ...
        
        if not dfs(0, 0):
            return False

        return len(visited) == n
        