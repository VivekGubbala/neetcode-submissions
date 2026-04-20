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
    inorderTraversal(root) {
        let res = []
        let node = root;
        let stack = [];
        while(node || stack.length){
            while(node){
                stack.push(node)
                node = node.left;
            }
            node = stack.pop();
            // console.log("hell", node, stack)
            res.push(node.val);
            node = node.right;
        }
        return res;
    }
}
