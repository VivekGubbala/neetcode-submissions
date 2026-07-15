class Solution:
    def lemonadeChange(self, bills: List[int]) -> bool:
        count = {
            5: 0,
            10: 0,
            20: 0
        }
        
        for i in range(len(bills)):
            count[bills[i]] += 1
            delta = bills[i] - 5
            
            if delta == 15:
                if count[5] > 0 and count[10] > 0:
                    count[5] -= 1
                    count[10] -= 1
                    continue
                if count[5] >= 3:
                    count[5] -= 3
                    continue
                return False
            if delta == 5:
                if count[5] > 0:
                    count[5] -=1
                    continue
                return False


        return True