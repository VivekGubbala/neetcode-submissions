class Solution:
    def reorganizeString(self, s: str) -> str:
        countMap = Counter(s)
        maxHeap = [ [-countMap[key], key] for key in countMap]
        heapq.heapify(maxHeap)
        holdEle= []
        res = []
        while maxHeap or holdEle:
            if maxHeap:
                maxEle = heapq.heappop(maxHeap)
                if res and res[-1] == maxEle[1]:
                    return ""
                res.append(maxEle[1])
                maxEle[0] += 1
            if holdEle:
                heapq.heappush(maxHeap, holdEle)
                holdEle = []
            if maxEle and maxEle[0] < 0:
                holdEle = [maxEle[0] , maxEle[1]]
            # print("chell", maxHeap, holdEle, maxEle[0])
        
        return "".join(res)
        