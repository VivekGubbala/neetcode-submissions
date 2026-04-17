class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        for(let i=0;i<prices.length; i++){
            for(let j=i+1; j<prices.length; j++){
                let diff = prices[j] - prices[i];
                if(diff > maxProfit){
                    maxProfit = diff;
                }
            }
        }
        return maxProfit;
    }
}
