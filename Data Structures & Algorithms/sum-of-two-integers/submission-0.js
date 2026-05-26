class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        while(b){
            let temp = (a&b)<<1
            a = a^b;
            b = temp;
        }
        return a;

    }
}


/** 
 * 001 
 * 001
 * 010
 * 
 * 
 * 0100
 * 0111
 * 1011
 * 
 * 0011
 * 1000
 * 1011
 * 
 * 
 * 
 * 0101
 * 0100
 * 0100
**/