class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */
    gcdOfStrings(str1: string, str2: string): string {
        let res = "";
        let minLen = Math.min(str1.length, str2.length)
        const l1 = str1.length
        const l2 = str2.length
        for(let i=minLen; i>0; i--){
            let temp = str1.slice(0,i);
            let len = temp.length;
            if(l1%temp.length!== 0 || l2%temp.length!==0){
                continue
            }
            if(temp.repeat(l1/len)=== str1 && temp.repeat(l2/len)=== str2){
                res = temp
                break
            }
        }
        return res
    }
}
