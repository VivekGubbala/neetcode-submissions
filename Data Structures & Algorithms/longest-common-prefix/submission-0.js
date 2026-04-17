class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let ans= "";
        for(let i = 0; i< strs[0].length; i++){
            let match = strs[0][i];
            for(let j = 1; j<strs.length; j++){
                if(strs[j][i]!== match)
                {
                    return ans;
                }
            }
            ans += match;
        }
        return ans;
    }
}
