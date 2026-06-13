class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums: number[]): number {
        let res = 1;
        nums.forEach((i, idx)=>{
            if(i<0){
                nums[idx]=0;
            }
        });
        nums.forEach((num)=>{
            if(Math.abs(num) > nums.length || num ===0){
                return
            };
            let pos = Math.abs(num) - 1;
            if(nums[pos] === 0){
                nums[pos] = -1 *( nums.length +1)
                return
            }
            if(nums[pos] > 0){
                nums[pos] = -1 * nums[pos];
            }

        })
        for(;res <=nums.length; res++){
            if(nums[res-1] >= 0){
                break
            }
        }
        return res;
    }
}
