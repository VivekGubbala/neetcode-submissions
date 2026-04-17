class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let countmap = new Array(2001).fill(null);
        for(let i=0;i<nums.length; i++){
            if(countmap[nums[i]+1000] == null){
                countmap[nums[i]+1000] = [nums[i] + 1000, 1]
            }else{
                countmap[nums[i]+1000][1]++;
            }
        }
        let result = countmap.filter(e=>e).sort((a,b) => a[1]-b[1]).map(i=> i[0] - 1000);
        return result.slice(result.length-k, result.length)

    }
}
