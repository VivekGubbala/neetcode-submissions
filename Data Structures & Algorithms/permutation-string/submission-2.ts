class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        let s1map = new Map();
        let s2map = new Map();
        //initialization
        for(let i = 'a'.charCodeAt(0); i<= 'z'.charCodeAt(0); i++){
            s1map.set(String.fromCharCode(i), 0)
            s2map.set(String.fromCharCode(i), 0)
        }
        //initial count
        for(let i=0; i< s1.length; i++){
            s1map.set(s1[i], s1map.get(s1[i]) + 1)
        }
        let j=0
        for(; j< s1.length; j++){
            s2map.set(s2[j], s2map.get(s2[j]) + 1)
        }

        let matches = 0
        // initial matches
        for(let i = 'a'.charCodeAt(0); i<= 'z'.charCodeAt(0); i++){
            if (s1map.get(String.fromCharCode(i)) ===  s2map.get(String.fromCharCode(i))){
                matches++;
            }   
        }
        if (matches === 26){
            return true
        }

        while(j<s2.length){
            let exitIndex = j - s1.length
            if(s2[j]=== s2[exitIndex]){
                j++;
                continue;
            }
            s2map.set(s2[j], s2map.get(s2[j]) + 1)
            s2map.set(s2[exitIndex], s2map.get(s2[exitIndex]) - 1)
            if (s1map.get(s2[j])=== s2map.get(s2[j])){
                matches++;
            }else if( s1map.get(s2[j]) === s2map.get(s2[j]) -1 ){
                matches--;
            }
            if (s1map.get(s2[exitIndex])=== s2map.get(s2[exitIndex])){
                matches++
            }else if(s1map.get(s2[exitIndex]) === s2map.get(s2[exitIndex])+1){
                matches--
            }

            if(matches === 26){
                return true;
            }
            j++
        }

        return false;
    }
}
