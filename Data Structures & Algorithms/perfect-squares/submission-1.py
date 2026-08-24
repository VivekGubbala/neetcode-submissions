class Solution:
    def numSquares(self, n: int) -> int:
        dp = set([0])
        maxnum = math.floor(math.sqrt(n))
        numlist = [i*i for i in range(1, maxnum+1)]
        # print(numlist)
        count = 0
        while True:
            count+=1
            # print("hell: ", count,dp)
            for j in dp.copy():
                for i in numlist:
                
                    newNum = i+j
                    if newNum == n:
                        return count
                    dp.add(newNum)
        