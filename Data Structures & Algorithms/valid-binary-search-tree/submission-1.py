# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        res = True
        def dfs(node, lower_limit, upper_limit):
            nonlocal res
            if not res or not node:
                return 
            
            if node.val >= upper_limit or node.val <= lower_limit:
                res = False
                return 
            
            dfs(node.left, lower_limit, node.val)
            dfs(node.right, node.val, upper_limit)
            return
        
        dfs(root, float("-inf"), float("inf"))
        return res