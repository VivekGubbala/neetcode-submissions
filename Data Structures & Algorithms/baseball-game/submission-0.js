class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = []
        for(let i=0; i<operations.length; i++){
            if(Number.isInteger(Number(operations[i]))){
                stack.push(Number(operations[i]));
                continue;
            }
            if(operations[i] == "C"){
                stack.pop();
                continue;
            }
            if(operations[i] == "+"){
                stack.push(stack[stack.length-1]+ stack[stack.length-2]);
                continue;
            }
            if(operations[i] == "D"){
                stack.push(stack[stack.length-1] * 2);
                continue;
            }

        }
        console.log("final", stack)
        return stack.reduce((a,i)=> a+=i, 0);
    }
}
