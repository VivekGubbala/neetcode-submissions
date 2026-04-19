class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let max = 0;
        let countMap = new Map();
        for(let l=0,r=0;r<s.length; r++){
            countMap.set(s[r], (countMap.get(s[r]) || 0 )+ 1)
            let maxf = 0;
            countMap.forEach((value, key)=>{maxf = Math.max(maxf, value)})

            while(r-l+1 - maxf > k){
                countMap.set(s[l], countMap.get(s[l]) -1)
                countMap.forEach((key, value)=> {maxf = Math.max(maxf, value)})
                l++;
                // console.log("hell2", r, l, r-l +1, maxf)
            }
            max = Math.max(max, r-l+1)
            // console.log("hell", r, l, r-l+1, maxf)

        }
        return max;
    }
}
