class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        diff = [ gas[i] - cost[i] for i in range(len(gas))]
        n = len(diff)
        if sum(diff) < 0:
            return -1
        
        for i in range(n):
            t = diff[i]
            j = (i+1)%n
            while t >= 0:
                if i == j:
                    return i
                t+= diff[j]
                j+=1
                j = j%n

        return -1