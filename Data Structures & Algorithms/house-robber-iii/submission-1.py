# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rob(self, root: Optional[TreeNode]) -> int:
        cache = {}
        def dfs(node, available):
            if (node, available) in cache:
                return cache[(node, available)]
            if not node:
                return 0
            amount = 0
            if available:
                amount = node.val + dfs(node.left, False) + dfs(node.right, False)
            amount1 = dfs(node.left, True) + dfs(node.right, True)
            cache[(node, available)] = max(amount, amount1)
            return cache[(node, available)]
        return dfs(root, True)