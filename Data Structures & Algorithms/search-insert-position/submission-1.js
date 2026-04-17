class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    recSearch(nums, target, pivot, start, end) {
        console.log(pivot,start, end)
        if(nums[pivot] == target){
            return pivot;
        }
        if(end-start<=1){
            if(nums[end]== target){
                return end;
            }
            if(nums[start]>= target){
                return start;
            }
            // if(nums[start] > target){
            //     return start
            // }
            if(nums[end] > target){
                return  end;
            }
            return end + 1
        }
        if(nums[pivot] > target ){
            return this.recSearch(nums,target, Math.floor((start + pivot)/2), start, pivot)
        }
        if(nums[pivot] < target ){
            return this.recSearch(nums,target, Math.floor((end + pivot)/2), pivot, end)
        }

        return 0;
    }
    searchInsert(nums, target) {
        let start = 0, end = nums.length -1;
        let pivot = Math.floor((start + end)/2);
        return this.recSearch(nums, target, pivot, start, end);
    }
}
