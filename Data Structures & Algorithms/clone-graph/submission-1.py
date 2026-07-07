"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        addressMap = {}
        if not node:
            return 

        def dfs(curr):
            addressMap[curr] = Node(curr.val)
            if not  len(curr.neighbors):
                return
            for i in range(len(curr.neighbors)):
                if curr.neighbors[i] not in addressMap:
                    dfs(curr.neighbors[i])
                addressMap[curr].neighbors.append(addressMap[curr.neighbors[i]])
            return
               
        dfs(node)
        return addressMap[node]
        