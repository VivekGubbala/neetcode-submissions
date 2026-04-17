class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let b=0, s=1;
        let diff = prices[s] - prices[b];
        if(diff > maxProfit){
            maxProfit = diff;
        }
        for(; s<prices.length; s++){
            if(prices[s]<prices[b]){
                b=s;
            }
            diff = prices[s]-prices[b]
            if(diff > maxProfit){
                maxProfit = diff;
            }
         
        }
        
        
        return maxProfit;
    }
}
