class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = [];
        let pick = new Array(nums.length).fill(false);
        function dfs(curr = [], i, pick){
            if(curr.length === nums.length){
                res.push([...curr]);
                return;
            }
            for(let j=0, k=i+1; j<nums.length; j++, k++){
                let temp = (j+i)% nums.length;
                if(!pick[temp]){
                    curr.push(nums[temp])
                    pick[temp] = true;
                    dfs(curr, k, pick);
                    pick[temp] = false;
                    curr.pop();
                }
                
            }
        }
        dfs([], 0, pick)
        return res;
    }
}
