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
     * @param {number} key
     * @return {TreeNode}
     */
    findMin(node) {
        if(!node){
            return null
        }
        if(node.left){
            return this.findMin(node.left)
        }else{
            return node.val
        }

    }
    deleteNode(root, key) {
        if(!root){
            return null
        }
        if(root.val == key){
            let min = null;
            if(root.right == null && root.left == null){
                return null
            }
            if(root.right != null){
               min = this.findMin(root.right)
               root.val = min
               root.right = this.deleteNode(root.right, min)
            }else{
                min = this.findMin(root.left)
                root.val = min
                root.left = this.deleteNode(root.left, min)
            }
        }else{
            if(root.val > key){
                root.left = this.deleteNode(root.left, key)
            }else{
                root.right = this.deleteNode(root.right, key)
            }
            
        }

        return root
    }
}
