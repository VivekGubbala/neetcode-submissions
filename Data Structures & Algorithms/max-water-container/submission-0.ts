class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let i = 0, j = heights.length -1;
        let max =  0;
        while(i < j){
            let area = (j-i)*Math.min(heights[i], heights[j])
            if(area > max){
                max = area;
            }
            if(heights[i] > heights[j]){
                j--;
            }else{
                i++;
            }
        }
        return max;
    }
}
