class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b);
        let res = []
        for(let i=0;i<nums.length-2;i++){
            while(i>0 && nums[i]=== nums[i - 1]){
                i++;
            }
            let l=i+1, r=nums.length -1;
            
            while(l<r){
                let sum = nums[i] + nums[l] + nums[r]

                if(sum === 0){
                    if(res.length){
                        let recent = res[res.length -1]
                        if(recent[0]!=nums[i] || recent[1]!=nums[l] ){
                            res.push([nums[i],nums[l],nums[r]]);
                        }
                        }else{
                            res.push([nums[i],nums[l],nums[r]]);
                        }
                    
                    r--;
                    continue;
                }
                if(sum > 0){
                    r--;
                }else{
                    l++;
                }
            }
        }
        return res
    }
}
