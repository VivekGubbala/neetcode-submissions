/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let l=0,r=n;
        while(l<r){
            let p = Math.round((l+r)/2);
            let check = guess(p);
            if(check == 0){
                return p
            }
            if(check == -1){

            }
            if(check == 1){
                l=p;
            }
            if(check == -1){
                r=p;
            }

        }
    }
}
