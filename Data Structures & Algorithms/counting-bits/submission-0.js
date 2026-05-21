class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let res = [];
        function findOnes(x) {
            let count = 0;
            while(x){
                if(x&1 == 1){
                    count++;
                }
                x=x>>1
            }
            return count;
        }
        for(let i=0; i<=n; i++){
            res.push(findOnes(i))
        }
        return res;
    }
}
