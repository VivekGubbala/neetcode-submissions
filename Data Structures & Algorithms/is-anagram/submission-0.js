class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sarray = new Array(256).fill(0);
        const tarray = new Array(256).fill(0);
        const l=s.length;
        if(s.length != t.length){
            return false
        }
        for(let i=0; i<l; i++){
            sarray[s.charCodeAt(i)]++;
        }
        for(let i=0; i<l; i++){
            tarray[t.charCodeAt(i)]++;
        }
        for(let i=0; i<sarray.length ; i++){
            if(sarray[i]!=tarray[i]){
                return false
            }
        }
        return true

    }
}
