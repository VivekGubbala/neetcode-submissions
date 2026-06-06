class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        let res = [];
        let numMap = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        }
        function dfs(curr: string, i: number){
            if(i >= digits.length ){
                if(curr){
                    res.push(curr.slice())
                }
                return
            }
            for(let j=0; j<numMap[digits[i]].length; j++){
                
                dfs(curr+numMap[digits[i]][j], i+1)
            }
        }
        dfs("", 0)
        return res;
    }
}
