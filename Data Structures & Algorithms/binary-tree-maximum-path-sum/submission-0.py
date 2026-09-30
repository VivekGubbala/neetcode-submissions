# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        max_sum = root.val
        def dfs(node):
            nonlocal max_sum
            if not node:
                return 0
            
            left_total = dfs(node.left)
            right_total = dfs(node.right)
            
            max_sum = max(node.val + left_total + right_total, node.val, node.val + left_total, node.val + right_total, max_sum)

            return max(node.val, node.val+right_total, node.val + left_total)

        dfs(root)
        return max_sum