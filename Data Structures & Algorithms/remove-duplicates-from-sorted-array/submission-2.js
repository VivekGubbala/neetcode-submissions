class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let i=1,u=0;
        for(;i<nums.length; i++){
            if(nums[u]<nums[i]){
                nums[++u] = nums[i]
            }
            

        }

        return u+1
    }
}
