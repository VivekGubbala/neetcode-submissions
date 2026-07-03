class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words: string[], order: string): boolean {
        let ordermap = new Map()
        for(let i = 0;i<order.length; i++){
            ordermap.set(order[i], i);
        }
        for( let i = 0; i< words.length -1; i++){
            let word1 = words[i];
            let word2 = words[i+1];
            
            for(let j = 0; j< word1.length; j++){
                if( j >= word2.length){
                    return false
                }
                if(ordermap.get(word1[j]) > ordermap.get(word2[j])){
                    return false
                }
                if(word2[j]!= word1[j]){
                    break
                }
            }
            
            
        }

        return true

    }
}
