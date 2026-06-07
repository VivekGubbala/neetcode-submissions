class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks: number[]): boolean {
        matchsticks.sort((a,b)=> a-b);
        const total = matchsticks.reduce((acc, i)=> acc + i, 0)
        let rem = total%4;
        if(rem!==0 || matchsticks.length < 4){
            return false;
        }
        const side = total/4;
        let maxNum = Math.max(...matchsticks);
        if(maxNum > side){
            return false;
        }
        let res = false;
        // let count = 0;
        // let maskArray = new Array(matchsticks.length).fill(false);
        function dfs(t: number, b: number, l: number, r: number, i: number){
            // console.log("hell check", t,b,l,r,i)
            if(t===side && b===side && l===side && r === side){
                res = true;
                return
            }
            if(res){
                return
            }
            if(i >=matchsticks.length){
                return
            }
            
            if(t+matchsticks[i]<=side){
                dfs(t+matchsticks[i], b,l,r,i+1)
            }
            if(b+matchsticks[i]<=side){
                dfs(t, b +matchsticks[i],l,r,i+1)
            }
            if(l+matchsticks[i]<=side){
                dfs(t, b,l+matchsticks[i],r,i+1)
            }
            if(r+matchsticks[i]<=side){
                dfs(t, b,l,r+matchsticks[i],i+1)
            }
                

        }
        dfs(0,0,0,0, 0)
        return res
    }
}
