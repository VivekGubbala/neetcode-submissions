class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let res = []
        candidates.sort((a,b)=>a-b);
        function dfs(curr, sum, i){
            if(sum === target){
                res.push([...curr]);
                return
            }
            if(i>=candidates.length || sum > target){
                return
            }
            dfs([...curr, candidates[i]], sum + candidates[i], i+1)
            while( i< (candidates.length-1) && candidates[i+1]==candidates[i]){
                i++;
            }
            dfs([...curr], sum , i+1)

        }
        dfs([], 0, 0)
        return res
    }
}
