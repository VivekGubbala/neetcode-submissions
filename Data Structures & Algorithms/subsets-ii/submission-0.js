class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let res = []
        nums.sort((a,b)=> a-b);

        function backTrack(curr, i) {
            if(i >=nums.length){
                res.push(curr.slice());
                return 
            }

            curr.push(nums[i]);
            backTrack(curr, i+1);
            curr.pop();
            while((i+1)<nums.length && nums[i]=== nums[i+1]){
                i++;
            }
            backTrack(curr, i+1)

        }
        backTrack([], 0)
        return res
    }
}
