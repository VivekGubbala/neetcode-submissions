class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let stack = [];
        let minstack = ""
        let res = [];
        for(let i=0;i<path.length;i++){
            if(path[i] == "/"){
                if(minstack.length){
                    stack.push(minstack);
                    minstack = ""
                }
            }else{
                minstack += path[i]
            }
        }
        if(minstack.length){
            stack.push(minstack);
            minstack = ""
        }
        // console.log(stack);
        for(let i=0;i<stack.length; i++){
            if(stack[i]== ".."){
                // console.log("hell check", res, i)
                res.pop();
            }else if(stack[i]== "."){
                continue
            }else{
                res.push(stack[i]);
            }
        }
        return "/" + res.join("/")
    }
}
