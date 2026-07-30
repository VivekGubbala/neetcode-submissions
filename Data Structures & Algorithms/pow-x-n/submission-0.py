class Solution:
    def myPow(self, x: float, n: int) -> float:
        store = {}

        def calc(n):
            if n == 0:
                return 1
            if n==1:
                return x
            if n==-1:
                return 1/x
            
            if n in store:
                return store[n]
            res = None
            a=n//2
            b= n//2 if n%2 == 0 else 1+n//2
            # if n >= 0:
                
            res= calc(a) * calc(b)
            store[n] = res
            # else:
            #     res= calc(a) / calc(b)

            return res

        return calc(n)
        