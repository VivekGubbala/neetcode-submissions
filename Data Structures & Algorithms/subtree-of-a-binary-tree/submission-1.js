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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSame(a, b){
        if(!a && !b){
            return true;
        }
        if(a?.val != b?.val){
            return false;
        }
        return this.isSame(a.left, b.left) && this.isSame(a.right, b.right);

    }
    isSubtree(root, subRoot) {
        if(!subRoot){
            return true;
        }
        if(!root){
            return false;
        }
        // if(root.val == subRoot.val){
        //     return this.isSame(root, subRoot);
        // }



        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot) || this.isSame(root, subRoot)
        
    }

}
