class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        let res = []
        function backtrack(curr: string, open: number, close: number):void {
            if(open === n && close === n){
                res.push(curr);
                return;
            }
            if(close > open){
                return
            }

            if(open < n){
                backtrack(curr+"(", open + 1, close)
            }
            backtrack(curr+")", open, close + 1)
        }
        backtrack("", 0,0)
        return res;
    }
}
