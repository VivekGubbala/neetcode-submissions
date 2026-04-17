class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        function quickSortDef(arr){
            if(arr.length <=1){
                return arr;
            }
            let pivot=Math.ceil(arr.length/2)
            let left=[], right=[];
            for (let i = 0; i<arr.length; i++){
                if(i== pivot){
                    continue
                }
                if(arr[i]<= arr[pivot]){
                    left.push(arr[i])
                }
                else{
                    right.push(arr[i])
                }
            }
            return [...quickSortDef(left), arr[pivot], ...quickSortDef(right)]
        }
        return quickSortDef(nums);
    }
}
