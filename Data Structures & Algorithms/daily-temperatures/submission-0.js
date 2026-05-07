class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        let res = new Array(temperatures.length).fill(0);
        for(let i = 0; i< temperatures.length; i++){
            if(!stack.length){
                stack.push([temperatures[i],i]);
                continue
            }
            if(temperatures[i] > stack[stack.length - 1][0]){
                res[stack[stack.length - 1][1]] = i - stack[stack.length - 1][1];
                stack.pop()
                i--;
            }else{
                stack.push([temperatures[i],i]);
            }

        }
        return res
    }
}
