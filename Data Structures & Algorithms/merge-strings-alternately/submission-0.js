class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let result = "";
        let i,j;
        for(i=0,j=0;i<word1.length && j<word2.length ; i++, j++ ){
            result += word1[i] + word2[j];
        }
        while(i<word1.length){
            result += word1[i];
            i++;
        }
        while(j<word2.length){
            result += word2[j];
            j++;
        }
        return result
    }
}
