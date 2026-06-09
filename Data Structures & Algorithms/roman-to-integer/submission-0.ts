class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    romanToInt(s: string): number {
        let romanMap = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
        let res = romanMap[s[s.length -1]];
        for(let i=s.length -2; i >=0; i--){
            if(romanMap[s[i]] < romanMap[s[i + 1]]){
                res -= romanMap[s[i]];
            }else{
                res += romanMap[s[i]];
            }
        }
        return res;
    }
}
