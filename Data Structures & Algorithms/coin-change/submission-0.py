class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        cache = { 0: 0 }
        minCoinValue = min(coins)
        for num in coins:
            cache[num] = 1
        # if amount == 0:
        #     return 0
        
        def dfs(amount):
            if amount in cache:
                return cache[amount]
            if amount < minCoinValue:
                return -1
            
            res = []
            for i in coins:
                if amount - i >= 0:
                    res.append(dfs(amount - i))

            res = [ i+1 for i in res if i >= 0]
            # print("helll", res, amount)
            cache[amount] = min(res) if len(res) > 0 else -1
            return cache[amount]
        return dfs(amount)