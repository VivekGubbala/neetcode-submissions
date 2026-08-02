class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        n = len(hand)
        if n%groupSize != 0:
            return False
        hand.sort()
        batches = round(n/groupSize)
        sp = [[] for _ in range(batches)]

        def checkAndInsert(value, index):
            
            if len(sp[index]) >= groupSize:
                return False
            if len(sp[index]) and value - sp[index][-1] != 1:
                return False
            sp[index].append(value)
            return True
        
        for val in hand:
            i = 0
            while i < batches and not checkAndInsert(val,i):
                i+=1
            if i == batches:
                return False  
            

        return True