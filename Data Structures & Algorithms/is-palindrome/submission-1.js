class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValidChar(c){
        if("a".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <="z".charCodeAt(0)){
            return true;
        }
        if("0".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <="9".charCodeAt(0)){
            return true;
        }
        return false

    }
    isPalindrome(s) {
        
        let start =0, end=s.length -1;
        let lowers = s.toLowerCase()
        for(;start<end;){
            if(!this.isValidChar(lowers[start])){
                // console.log("hell1", start, end, s[start], s[end])
                start++;
                continue;
            }
            if(!this.isValidChar(lowers[end])){
                // console.log("hell2", start, end, s[start], s[end])
                end--;
                continue;
            }
            if(lowers[start]!= lowers[end]){
                // console.log("hell", start, end, s[start], s[end])
                return false
            }
            start++;
            end--;
        }
        return true
    }
}
