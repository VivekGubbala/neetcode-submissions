class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numMap = new Set();
        for(let i=0; i<nums.length; i++){
            numMap.add(nums[i])
        }
        let maxseq = 0;
        let unique = [...numMap]
        for(let i=0; i<unique.length; i++){
            let seqLen = 1;
            if(numMap.has(unique[i]-1)){
                continue;
            }
            while(numMap.has(unique[i]+ seqLen)){
                seqLen++;
            }
            if(maxseq<seqLen){
                maxseq = seqLen;
            }
        }
        return maxseq;

    }
}
