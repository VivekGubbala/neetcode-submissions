class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let n = nums.length;
        // let rcsum = new Array(n);
        // let lcsum = new Array(n);
        // rcsum[0] = nums[0];
        // lcsum[0] = nums[n-1];
        // for(let i=1;i<n; i++){
        //     rcsum[i] = rcsum[i-1] + nums[i];
        // }
        // for(let i=n-2;i>=0; i--){
        //     lcsum[i] = lcsum[i+1] + nums[i];
        // }
        // let result = 0;
        // let total = rcsum[n-1];
        // for(let i=1;i<n;i++){
        //     for(let j=0; j<(n-i); j++){
        //         let sum = 0;
        //         if(j==0){
        //             let sum = total - lcsum[j+i] - rcsum[j-1];
        //         }
        //         if(j==1){
                    
        //         }
        //     }
        // }
        // let win = 1;
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
