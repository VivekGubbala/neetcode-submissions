class Solution:
    def maxTurbulenceSize(self, arr: List[int]) -> int:
        globalMax = 1
        currMax = 1

        prevSign = 0

        if len(arr) == 1:
            return 1


        for i in range(1, len(arr)):
            if arr[i] == arr[i-1]:
                currMax = 1
                prevSign = 0
                continue
            currSign = -1 if arr[i] < arr[i-1] else 1

            if prevSign == 0:
                prevSign = currSign
                currMax = 2
                globalMax = max(currMax, globalMax)
                continue
            
            if prevSign == currSign:
                currMax = 2
            else:
                currMax += 1

            prevSign = currSign
            globalMax = max(currMax, globalMax)
        return globalMax

        