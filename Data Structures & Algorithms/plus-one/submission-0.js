class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        digits.reverse();
        if(digits[0]!=9){
            digits[0] += 1;
            return digits.reverse()
        }else{
            let i=0;
            while(digits[i]==9 && i<digits.length){
                digits[i] = 0;
                i++;
            }
            if(i == digits.length){
                digits.push(1);
            }else{
                digits[i] += 1;
            }
        }
        return digits.reverse()
        

    }
}
