class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cma = position.map((i,idx)=>[i, speed[idx]]).sort((a,b)=>b[0]-a[0]);
        let stack = []
        for(let i=0; i< cma.length ; i++){
            let eta = (target - cma[i][0])/cma[i][1];
            if(!stack.length){
                stack.push(eta)
            }else{
                if(stack[stack.length-1] < eta){
                    stack.push(eta)
                }
            }

        }
        return stack.length
    }
}
