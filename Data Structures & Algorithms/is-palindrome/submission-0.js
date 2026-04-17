class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValidChar(c){
        if("a".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <="z".charCodeAt(0)){
            // console.log("lower alpha", c, c.charCodeAt(0), "a".charCodeAt(0), "z".charCodeAt(0))
            return true;
        }
        if("A".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <="Z".charCodeAt(0)){
            // console.log("upper alpha")
            return true;
        }
        if("0".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <="9".charCodeAt(0)){
            // console.log("number")
            return true;
        }
        // console.log("not a alpja num")
        return false

    }
    isPalindrome(s) {
        
        let start =0, end=s.length -1;
        for(;start<end;){
            if(!this.isValidChar(s[start])){
                // console.log("hell1", start, end, s[start], s[end])
                start++;
                continue;
            }
            if(!this.isValidChar(s[end])){
                // console.log("hell2", start, end, s[start], s[end])
                end--;
                continue;
            }
            if(s[start].toLowerCase()!= s[end].toLowerCase()){
                // console.log("hell", start, end, s[start], s[end])
                return false
            }
            start++;
            end--;
        }
        return true
    }
}
