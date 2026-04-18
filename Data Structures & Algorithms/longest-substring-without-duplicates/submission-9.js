class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max=1;
        let windowSet = new Set();
        let i=0, start=0;
        if(s.length == 1 || s.length == 0){
            return s.length
        }
        // while(s[start]== s[i] && i<s.length){
        //         i++;
        // }
        // start=i-1;
        
        for(; i<s.length; i++){
            
            if(windowSet.has(s[i])){
                while(windowSet.has(s[i])){

                windowSet.delete(s[start])
                start++;
                }
                // continue
            }
            windowSet.add(s[i])
            let diff = i-start + 1;
            // console.log("hell", start, i)
            if(diff> max){
                console.log("hell", start, i)
                max = diff
            }
            
        }
        // if(i == s.length ){
        //     let diff = i-start;
        //     if(diff> max){
        //         max = diff
        //     }
        // }
        return max

    }
}
