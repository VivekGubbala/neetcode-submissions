class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        function isAnagram(a, b){
            if(a.length !== b.length){
                return false;
            }
            let mapArray = Array(255).fill(0);
            for(let i = 0; i < a.length; i++){
                mapArray[a.charCodeAt(i)]++;
                mapArray[b.charCodeAt(i)]--;
            }
            for(let i = 0; i < mapArray.length; i++){
                if( mapArray[i] != 0 ){
                    return false;
                }
            }
            return true;

        }
        function getResult(remainingArray, ansArray){
            
            if( remainingArray.length == 1){
                return [remainingArray, ...ansArray]
            }
            let temp = [remainingArray[0]];
            let pendingArray = [];
            // console.log("#", remainingArray, ansArray)
            for(let i = 1; i < remainingArray.length; i++){
                if(isAnagram(remainingArray[0], remainingArray[i])){
                    temp.push(remainingArray[i])
                }
                else{
                    pendingArray.push(remainingArray[i])
                }
            }
            if(pendingArray.length > 0){
                let t = getResult(pendingArray, [temp, ...ansArray]);
                // console.log("hell2: ", t)
                return t
            }
            // console.log("hell1: ", [temp, ...ansArray])
            return [temp, ...ansArray]
        
        }
        
        return getResult(strs, [])
    }
}
