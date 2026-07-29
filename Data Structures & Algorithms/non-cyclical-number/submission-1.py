class Solution:
    def isHappy(self, n: int) -> bool:
        marked = set()
        def fun(n):
            string = str(n)
            total = 0
            for ch in string:
                total += int(ch)**2
            return total
        v = n
        while True:
            if v == 1:
                return True
            
            v = fun(v)
            if v in marked:
                return False
            else:
                marked.add(v)
        return False
