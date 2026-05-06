class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) { 
        let stack = []
        for(let i = 0; i< asteroids.length; i++){
            // console.log("hell check", stack)
            if(Math.sign(asteroids[i]) != -1 || stack.length == 0){
                stack.push(asteroids[i])
                continue
            }
            if(Math.sign(stack[stack.length -1]) == -1 ){
                stack.push(asteroids[i])
                // console.log("skip check", stack)
                continue
            }
            if(Math.abs(stack[stack.length -1]) == Math.abs(asteroids[i])){
                stack.pop()
                continue
            }
            if(Math.abs(stack[stack.length -1]) < Math.abs(asteroids[i])){
                // stack.push(asteroids[i])
                stack.pop()
                i--;
                continue
            }
           


        }
        return stack
    }
}
