class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        const max = Math.max(...height);
        let i=0, j=height.length -1;
        let level=1;
        let res = 0;
        while(level<=max){
            while(height[i]<level){
                i++;
            }
            while(height[j]<level){
                j--;
            }
            if(i>=j){
                break;
            }
            for(let k=i;k<j;k++){
                if(height[k]<level){
                    res++;
                }
            }
            level++;
        }
        return res
    }
}
