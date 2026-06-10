class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n: number): string[][] {
        let res = [];
        let colMask = new Set();
        let pdMask = new Set();
        let ndMask = new Set();
        function backtrack(curr,i) {
            if(n === i){
                res.push(curr.slice())
                return
            }
            
            for(let j=0;j<n;j++){
                let temp = new Array(n).fill(".")
                if(!colMask.has(j) && !pdMask.has(i-j) && !ndMask.has(i+j)){
                    colMask.add(j);
                    pdMask.add(i-j);
                    ndMask.add(i+j)
                    temp[j] = "Q"
                    curr.push(temp.join(""));
                    backtrack(curr, i +1)
                    curr.pop();
                    colMask.delete(j);
                    pdMask.delete(i-j);
                    ndMask.delete(i+j)
                }

            }
            return 

        }
        backtrack([], 0)
        return res;
    }
}
