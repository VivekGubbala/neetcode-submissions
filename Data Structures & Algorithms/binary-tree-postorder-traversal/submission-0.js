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
     * @return {number[]}
     */
    postorderTraversal(root) {
        let res = [];
        let curr = root;
        let stack = [];
        while(curr || stack.length){
            if(curr){
                res.push(curr.val)
                stack.push(curr.left)
                curr = curr.right
            }else{
                curr = stack.pop()
            }
        }
        return res.reverse()
    }
}
