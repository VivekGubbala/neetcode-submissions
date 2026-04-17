class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    recSearch(nums, pivot, start, end, target){
        console.log("hell", nums[pivot], pivot, start, end)
            if( nums[pivot] == target){
                return pivot;
            }
            if(end-start < 1 || pivot < 0 || start == pivot || end == pivot){
                if(target == nums[start])
                    return start
                if(target == nums[end]){
                    return end
                }
                return -1
            }
            if(nums[pivot] > target){
                return this.recSearch(nums, Math.floor((pivot+start)/2), start, pivot, target)
            }
            if(nums[pivot] < target){
                return this.recSearch(nums, Math.floor((end+pivot)/2), pivot, end, target)
            }
            
            return -1;
        }
    search(nums, target) {
        let pivot = Math.floor(nums.length/2);
        let start = 0, end= nums.length -1;
        
        return this.recSearch(nums, pivot, start, end, target)
    }
}
