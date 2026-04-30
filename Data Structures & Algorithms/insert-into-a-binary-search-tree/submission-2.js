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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        let newNode = new TreeNode(val, null, null)
        if(!root){
            return newNode
        }
        if(root.val > val && !root.left){
            root.left = newNode;
            return root
        }
        if(root.val < val && !root.right){
            root.right = newNode;
            return root
        }
        if(root.val > val){
            
            this.insertIntoBST(root.left, val)
        }
        if(root.val < val){
            this.insertIntoBST(root.right, val)
        }

        return root
    }
}
