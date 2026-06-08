class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    canPartitionKSubsets(nums: number[], k: number): boolean {
        const total = nums.reduce((acc, i)=> acc+i, 0);
        if(total % k !== 0 ){
            return false;
        }
        const subSum = total / k;
        let usedMap = new Array(nums.length).fill(false);
        function backtrack(currSum: number, i: number, k: number){
            if(k === 0){
                return true;
            }
            if(currSum === subSum){
                return backtrack(0, 0, k-1)
            }
            for(let j=i;j<nums.length; j++){
                if(usedMap[j] || (nums[j] + currSum > subSum)){
                    continue
                }
                usedMap[j]=true
                if(backtrack(nums[j] + currSum, j+1, k)){
                    return true
                }
                usedMap[j]=false
            }
            return false

        }
        return backtrack(0,0,k)

    }
}
