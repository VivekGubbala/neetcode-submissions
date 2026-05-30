class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let res = [];
        function dfs(curr, i){
            if(i>n){
                return 
            }
            if(curr.length === k){
                res.push([...curr])
                return 
            }
            
            dfs([...curr, i+1], i+1)
            dfs([...curr], i+1)
        }
        dfs([], 0)
        return res
    }
}
