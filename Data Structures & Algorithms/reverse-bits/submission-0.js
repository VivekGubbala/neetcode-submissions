class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let res = 0;
        let i = 0;
        while(n){
            let rem = n & 1;
            n = n >>> 1;
            if(rem){
                let mask = 1;
                mask = mask << (31 -i);
               res = res | (mask);
            }
            i++;
        }
        return res >>> 0;
    }   
}
