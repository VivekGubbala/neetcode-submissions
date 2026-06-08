class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    canPartitionKSubsets(nums: number[], k: number): boolean {
        let total = nums.reduce((acc, i)=>acc+i, 0);
        nums.sort((a,b)=>b-a);
        if(total%k !==0){
            return false;
        }
        const eqSum = total / k;
        const max = Math.max(...nums);
        if(max > eqSum || nums.length < k){
            return false
        }
        
        let mask = new Array(nums.length).fill(false);
        let res = false;
        function dfs(curr: number, i: number){
            // console.log("hell", curr, i, res, mask)
            if(curr === eqSum){
                res = true;
                return
            }
            if(res || i>=nums.length){
                return;
            }
            if(mask[i]){
                dfs(curr, i+1)
                return
            }
            curr += nums[i] 
            if(curr <= eqSum){
                mask[i] = true;
                dfs(curr, i+1)
            }
            curr -= nums[i]
            if(!res){
                mask[i] = false
                dfs(curr, i+1)
            }
            
           
        }
        let bucket = new Array(k).fill(0);
        for(let i=0;i<k;i++){
            res = false
            dfs(bucket[i], 0);
            // console.log("hell fire 2: ", res, mask)
            if(!res){
                return false
            }
        }
        return mask.reduce((acc, i)=>acc && i, true) 
    }
}
