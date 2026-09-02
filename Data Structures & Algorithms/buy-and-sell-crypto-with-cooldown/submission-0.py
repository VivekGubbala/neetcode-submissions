class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        dp = {}

        def dfs(i, buying):
            if i >= len(prices):
                return 0
            if (i, buying) in dp:
                return dp[(i,buying)]
            
            cooldown = dfs(i+1, buying)

            if buying:
                buy_res = dfs(i+1, not buying) - prices[i]
                dp[(i, buying)] = max(buy_res, cooldown)
            else:
                sell_res = dfs(i+2, not buying) + prices[i]
                dp[(i, buying)] = max(sell_res, cooldown)
            return dp[(i, buying)]
        return dfs(0, True)