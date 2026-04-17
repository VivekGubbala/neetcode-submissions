class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for(let i=0;i<s.length; i++){
            if(["[","(","{"].includes(s[i])){
                stack.push(s[i])
            }else{
                if(s[i]=="]" && stack[stack.length-1] !="["){
                    return false
                }
                if(s[i]==")" && stack[stack.length-1] !="("){
                    return false
                }
                if(s[i]=="}" && stack[stack.length-1] !="{"){
                    return false
                }
                stack.pop()
            }
        }
        if(stack.length > 0){
            return false;
        }
        return true
    }
}
