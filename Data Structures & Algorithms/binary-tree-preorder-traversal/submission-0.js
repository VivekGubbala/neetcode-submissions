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
    preorderTraversal(root) {
        let stack=[];
        let res = [];
        let curr = root;
        while(curr || stack.length){
            if(curr){
                res.push(curr.val);
                stack.push(curr.right)
                curr = curr.left
            }else{
                curr = stack.pop()
            }
            
        }
        return res
    }
}
