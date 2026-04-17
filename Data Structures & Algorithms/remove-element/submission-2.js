class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        if(nums.length == 0){
            return 0
        }
        let i=0, j=nums.length-1;
        for(;i<=j;){
            if(nums[i]== val && nums[j]!=val){
                let temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp;
                i++;
            }else{
                if(nums[i]== val && nums[j]==val){
                    j--;
                }else{
                    i++;
                }

            }
        }
        // console.log("hell", nums)
        return i
    }
}
