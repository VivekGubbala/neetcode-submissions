class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let i=m-1, j=n -1, sortindex = m+n -1;
        for(;j>=0 && i >= 0; ){
            if(nums1[i]>nums2[j]){
                nums1[sortindex] = nums1[i]
                i--;
            }
            else{
                nums1[sortindex] = nums2[j]
                j--;
            }
            sortindex--;
        }
        while(j>=0){
            nums1[sortindex] = nums2[j];
            sortindex--;
            j--;
        }
        while(i>=0){
            nums1[sortindex] = nums1[i];
            sortindex--;
            i--;
        }

        
    }
}
