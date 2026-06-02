class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums: number[]): number[][] {
        let res = [];
        let used = new Array(nums.length).fill(false);
        nums.sort((a,b)=>a-b);
        function dfs(curr: number[], i: number, used: boolean[]): void{
            if(curr.length == nums.length){
                res.push(curr.slice())
                return
            }
            let hashset = new Set();
            for(let j=0; j<nums.length; j++){
                if(used[j]){
                    continue;
                }
                // if(j>0 && nums[j-1]==nums[j]){
                //     continue;
                // }
                if(hashset.has(nums[j])){
                    continue
                }
                hashset.add(nums[j])
                used[j]=true
                curr.push(nums[j]);
                dfs(curr, j+1, used);
                used[j]=false
                curr.pop();
            }
        }
        dfs([], 0, used)
        return res;
    }
}
