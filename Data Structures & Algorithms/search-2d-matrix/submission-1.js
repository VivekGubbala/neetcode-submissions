class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let cols = matrix[0].length;

        //interested row
        
        let l=0, r=rows -1;
        let targetRow = null;
        if(target <= matrix[0][cols-1]){
            targetRow = 0;
        }
        if(target >= matrix[rows-1][0]){
            targetRow = rows-1;
        }

        while(l<r && targetRow == null){
            let pivot = Math.round((l+r)/2);
            // console.log("hell check", l, r, pivot)
            if(r - l <=1){
                targetRow = l;
                break;
            }
            if(target == matrix[pivot][0]){
                // targetRow = pivot;
                return true
            }
            if(target > matrix[pivot][0]){
                l = pivot
            }else if(target < matrix[pivot][0]){
                r = pivot
            }
        }
        // console.log("hell row", targetRow)

        // check in col
        l=0;
        r=cols-1;
        while(l<=r){
            let pivot = Math.round((l+r)/2);
            if(target == matrix[targetRow][l] || target == matrix[targetRow][r]){
                return true
            }
            if(r - l <=1){
                return false
            }
            if(target == matrix[targetRow][pivot]){
                // targetRow = pivot;
                return true
            }
            if(target > matrix[targetRow][pivot]){
                l = pivot
            }else if(target < matrix[targetRow][pivot]){
                r = pivot
            }
        }

        return false
    }
}
