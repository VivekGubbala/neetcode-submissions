class Solution:
    def findInMountainArray(self, target: int, mountainArr: 'MountainArray') -> int:
        #find the peak
        l, r = 0, mountainArr.length() -1
        peakValue = None
        peakIndex = None
        while l < r:
            p = (l +r) //2
            pvalue = mountainArr.get(p) 
            pbefore = mountainArr.get(p-1)
            pafter = mountainArr.get(p+1)
            if pvalue > pbefore and pvalue > pafter:
                peakValue = pvalue
                peakIndex = p
                break
            elif pvalue > pbefore and pvalue < pafter:
                l = p
            else:
                r = p
        
        if peakValue < target:
            return -1

        if mountainArr.get(0) == target:
            return 0
            
        
        l, r = 0, peakIndex
        print(peakIndex)
        while r-l>1:
            p = (l +r) //2
            pvalue = mountainArr.get(p)
            if pvalue == target:
                return p
            elif pvalue > target:
                r = p
            else:
                l = p
        
        if peakValue == target:
            return peakIndex

        l, r = peakIndex, mountainArr.length() -1
        while r-l>1:
            p = (l +r) //2

            pvalue = mountainArr.get(p)
            if pvalue == target:
                return p
            elif pvalue < target:
                r = p
            else:
                l = p
        
        if mountainArr.get(mountainArr.length() -1) == target:
            return mountainArr.length() -1

        return -1