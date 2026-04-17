class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftcp = new Array(nums.length).fill(1);
        let rightcp = new Array(nums.length).fill(1);
        let result = new Array(nums.length).fill(1);
        leftcp[0] = nums[0];
        rightcp[nums.length-1] = nums[nums.length-1]
        for(let i=1;i<nums.length; i++){
            leftcp[i] =  leftcp[i-1] * nums[i];
        }
        for(let j=nums.length-2; j>=0 ;j--){
            rightcp[j] = rightcp[j+1] * nums[j];
        }

        for(let i=0;i<nums.length; i++){
            if(i==0){
                result[i] = rightcp[i+1]
            } else if( i == (nums.length-1)){
                result[i] = leftcp[i-1]
            }else{
                result[i] = rightcp[i+1] * leftcp[i-1];
            }
        }
        return result;
    }
}
