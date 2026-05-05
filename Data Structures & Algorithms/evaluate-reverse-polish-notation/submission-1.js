class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let i = 0; i< tokens.length; i++){
            if(["+", "-", "*", "/"].includes(tokens[i])){
                let num1 = parseInt(stack.pop())
                let num2 = parseInt(stack.pop()) 
                if(tokens[i]== "+"){
                    stack.push(num2+num1);
                }
                if(tokens[i]== "-"){
                    stack.push(num2-num1);
                }
                if(tokens[i]== "*"){
                    stack.push(num2*num1);
                }
                if(tokens[i]== "/"){
                    stack.push(num2/num1);
                }
                // console.log("hell op", stack)

            }else{
                stack.push(tokens[i])
            }
        }
        return parseInt(stack.pop())
    }
}
