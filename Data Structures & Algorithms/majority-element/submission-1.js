class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let major = nums[0], occ =0;
        for(let i=0; i< nums.length; i++){
            if(nums[i] === major){
                occ++;
            }else{
                occ--;
            }
            if(occ<=0){
                major = nums[i];
                occ =1;
            }
            
        }
        return major
    }
}
