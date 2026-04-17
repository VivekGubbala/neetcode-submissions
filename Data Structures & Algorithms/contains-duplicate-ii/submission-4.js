class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkduplicates(nums, startIdx, endIdx){
        // console.log("hell", startIdx, endIdx)
        let tempArray = nums.slice(startIdx, endIdx + 1).sort();
        for(let i=0; i<tempArray.length -1 ; i++){
            if(tempArray[i]== tempArray[i+1]){
                return true
            }
        }
        return false
    }
    containsNearbyDuplicate(nums, k) {
        // console.log("hell")
        // let last = nums.length -1 ? i+k: nums.length -1;
        for(let i=0; i<nums.length -1 ; i++){
            let lastIdx = i+k <= nums.length -1 ? i+k: nums.length -1;
            // console.log("hell", i, lastIdx)
            if(this.checkduplicates(nums, i, lastIdx))
                return true;
        }
        // console.log("hell check")
        return false
    }
}
