class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        dp = {}

        def dfs(curr, parent_coin):
            if (curr, parent_coin) in dp:
                return dp[(curr, parent_coin)]
            if curr > amount:
                return 0
            if curr == amount:
                return 1
            
            res = 0
            for i in coins:
                if i < parent_coin:
                    continue
                res += dfs(curr+i, i)
            
            dp[(curr, parent_coin)] = res
            return dp[(curr, parent_coin)]
        
        return dfs(0, 0)