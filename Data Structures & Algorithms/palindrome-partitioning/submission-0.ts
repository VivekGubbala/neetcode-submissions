class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {
        let res = [];
        function isPalindrome(input: string){
            for(let i=0; i<Math.floor(input.length/2); i++){
                if(input[i]!==input[input.length-1-i]){
                    return false
                }
            }
            return true
        }
        function dfs(curr, i) {
            if(i >= s.length){
                res.push(curr.slice());
                return 

            }
            for(let j=i+1; j<=s.length;j++){
                let newCan = s.slice(i,j);
                if(isPalindrome(newCan)){
                    curr.push(newCan)
                    dfs(curr, j)
                    curr.pop()
                }

            }
        }
        dfs([], 0)
        return res;
    }
}
