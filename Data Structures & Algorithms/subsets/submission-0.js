class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {

        let res = [];
        function bfs(nums, curr, i){
            if(i === nums.length){
                res.push(curr);
                return
            }
            bfs(nums, [...curr, nums[i]], i+1);
            bfs(nums, curr, i+1)

        }
        bfs(nums, [], 0)
        return res
    }
}

/**
 * 
 * 
 */