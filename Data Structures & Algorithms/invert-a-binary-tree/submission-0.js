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
     * @return {TreeNode}
     */
    invertTree(root) {
        let curr = root;
        let stack = []
        while(curr || stack.length){
            if(curr){
                let temp = curr.left;
                curr.left = curr.right;
                curr.right = temp
                stack.push(curr.right)
                curr = curr.left
            }else{
                curr = stack.pop()
            }

        }
        return root
    }
}
