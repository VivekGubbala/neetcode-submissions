class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let n = nums.length;
        let result = 0;
        for(let win=1; win<=n; win++){
            let sum=0;
            for(let j=0;j<win; j++){
                sum+= nums[j]
            }
            if(sum==k){
                result++;
            }
            for(let i=0; (win+i)<n ; i++){
                sum = sum - nums[i] + nums[win+i]
                if(sum==k){
                    result++;
                }
            }
        }
        return result;

    }
}
