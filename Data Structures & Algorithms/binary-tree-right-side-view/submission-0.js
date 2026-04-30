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
    rightSideView(root) {
        let res = [];
        let i = 0;

        function pot(root, index){
            if(!root){
                return 
            }

            if(res[index]){
                res[index].push(root.val)
            }else{
                res[index] = [root.val]
            }

            pot(root.left, index + 1)
            pot(root.right, index + 1)
            return

        }
        pot(root, i)
        return res.map(i=>i[i.length -1]);
    }
}
