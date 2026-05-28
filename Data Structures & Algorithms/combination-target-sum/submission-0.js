class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];
        function dfs(curr, sum, i){
            if(sum === target){
                res.push([...curr]);
                return
            }
            if(i>=nums.length || sum > target){
                return
            }
            dfs([...curr, nums[i]], sum + nums[i], i);
            dfs(curr, sum, i + 1);
            return

        }
        dfs([], 0,0)
        return res;
    }
}
