class Solution:
    def lastStoneWeightII(self, stones: List[int]) -> int:
        total = sum(stones)
        target = math.ceil(total/2)
        mindif = None
        dp = {}

        def dfs(i, currentsum):
            if (i, currentsum) in dp:
                return dp[(i, currentsum)]
            if i >= len(stones) or currentsum >= target:
                return currentsum

            dp[(i, currentsum)] = None
            res1 = dfs(i+1, currentsum)
            res2 = dfs(i+1, currentsum + stones[i])
            if abs(res1-target) > abs(res2-target):
                dp[(i, currentsum)] = res2
            else:
                dp[(i, currentsum)] = res1
            return dp[(i, currentsum)]
        
        split1 = dfs(0,0)
        split2 = total - split1

        return abs(split1-split2)
            