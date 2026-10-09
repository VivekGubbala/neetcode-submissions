class Solution:
    def addBinary(self, a: str, b: str) -> str:
        res = ""
        a = a[::-1]
        b = b[::-1]
        carry = 0
        for i in range(max(len(a), len(b))):
            total = carry
            if i < len(a):
                total += int(a[i])
            if i < len(b):
                total += int(b[i])
            
            carry = 1 if total > 1 else 0
            if total == 2:
                res += "0"
            if total == 3:
                res += "1"
            if total <= 1:
                res += str(total)
            
        if carry != 0:
            res += "1"
        return res[::-1]