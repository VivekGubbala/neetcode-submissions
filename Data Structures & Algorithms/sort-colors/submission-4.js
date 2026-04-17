class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    
    sortColors(nums) {
        function swap(arr, a,b){
            let temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
        }
        let start=-1, end=nums.length, i=0;
        while(nums[i]==0){
            start =i++;
        }
        i=end-1;
        while(nums[i]==2){
            end =i--;
        }
        for(i=start+1;i<end; ){
            if(nums[i]==0){
                swap(nums, i, ++start)
            }
            if(nums[i]==2){
                swap(nums, i, --end)
            }
            if(nums[i]==1 || start==i){
                i++;
            }

            
            console.log("hell: ", nums, i)
        }
    }
}
