class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let countmap = new Map();
        let finalArray = new Set();
        let n = nums.length
        for(let i=0;i < nums.length; i++){
            if(countmap.has(nums[i])){
                let val = countmap.get(nums[i]) + 1;
                countmap.set(nums[i],val)
                if(val > Math.floor(n/3)){
                    finalArray.add(nums[i]);
                }
            }else{
                countmap.set(nums[i], 1)
                if(1 > Math.floor(n/3)){
                    finalArray.add(nums[i]);
                }
            }
        }
        return [...finalArray];
    }
}
