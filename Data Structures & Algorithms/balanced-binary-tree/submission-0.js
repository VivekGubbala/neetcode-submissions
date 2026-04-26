/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        let balanced = true;
        function dfs(node){
            if(!node){
                return 0;
            }
            let left = dfs(node.left) + 1
            let right = dfs(node.right) + 1
            if(Math.abs(left - right)>1){
                balanced = false
            }
            return Math.max(left, right)
        }
        dfs(root)
        return balanced
    }
}
