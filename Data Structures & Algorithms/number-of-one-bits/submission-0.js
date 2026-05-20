class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let res = 0;
        while(n>0){
            if(n%2==1){
                res++;
            }
            n = n>>1
        }
        return res
    }
}
