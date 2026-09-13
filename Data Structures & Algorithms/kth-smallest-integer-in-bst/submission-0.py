# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        ordered_eles = []
        def dfs(node):
            if len(ordered_eles) == k:
                return
            if not node:
                return
            
            dfs(node.left)
            ordered_eles.append(node.val)
            dfs(node.right)
            return
        dfs(root)
        return ordered_eles[k-1]
