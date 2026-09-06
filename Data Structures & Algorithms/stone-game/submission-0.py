class Solution:
    def stoneGame(self, piles: List[int]) -> bool:
        i=0
        j = len(piles) -1
        sum_alice = 0
        sum_bob = 0
        while(i<j):
            if piles[i] >= piles[j]:
                sum_alice += piles[i]
                i+= 1
            else:
                sum_alice += piles[j]
                j -= 1
            
            if piles[i] <= piles[j]:
                sum_bob += piles[i]
                i+= 1
            else:
                sum_bob += piles[j]
                j -= 1

        

        return sum_alice > sum_bob