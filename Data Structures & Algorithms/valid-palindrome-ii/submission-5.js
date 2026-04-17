class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s){
        let start=0, end=s.length -1;
        for(;start<end;){
            if(s[start]!=s[end]){
                return false;
            }
            start++;
            end--;
        }
        return true
    }
    validPalindrome(s) {
        let start=0, end = s.length -1;
        for(;start<end;){
            if(s[start]!=s[end]){
                return this.isPalindrome(s.slice(start, end)) || this.isPalindrome(s.slice(start +1, end+1))
            }
            start++;
            end--;

        }
        return true
    }
    
}
