class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let wordstack = []
        let countstack = []
        for(let i = 0; i< s.length; i++){
            if(s[i]=="]"){
                let temp = wordstack.pop()
                if(wordstack.length>=1){
                    wordstack.push(wordstack.pop() + temp.repeat(countstack.pop()))
                }else{
                    wordstack.push(temp.repeat(countstack.pop()))
                }
                
            }else if(Number.isInteger(Number(s[i]))){
                let num = ""
                while(Number.isInteger(Number(s[i]))){
                    num+=s[i];
                    i++;
                }
                countstack.push(num)
                i--;
            }else if(s[i]== "["){
                wordstack.push("")
            }else{
                if(!wordstack.length){
                    wordstack.push(s[i])
                }else{
                    let temp = wordstack.pop()
                    wordstack.push(temp+s[i])
                }
            }
            // console.log("hell ", wordstack , countstack)
        }
        return wordstack.join("")
    }
}
