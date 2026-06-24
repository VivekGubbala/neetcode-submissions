class MedianFinder:

    def __init__(self):
        self.minHeap = []
        self.maxHeap = []
        

    def addNum(self, num: int) -> None:
        if len(self.maxHeap) == 0:
            heapq.heappush(self.maxHeap, -num)
            return
        if len(self.minHeap) == 0:
            if -self.maxHeap[0] < num:
                heapq.heappush(self.minHeap, num)
            else:
                heapq.heappush(self.minHeap, -heapq.heappop(self.maxHeap))
                heapq.heappush(self.maxHeap, -num)
            return
        length = len(self.minHeap) + len(self.maxHeap)
        if length%2 == 0:
            if self.minHeap[0] > num:
                heapq.heappush(self.maxHeap, -num)
            else:
                heapq.heappush(self.maxHeap, -heapq.heappop(self.minHeap))
                heapq.heappush(self.minHeap, num)
        else:
            if len(self.maxHeap) > len(self.minHeap):
                if -self.maxHeap[0] < num:
                    heapq.heappush(self.minHeap, num)
                else:
                    heapq.heappush(self.minHeap, -heapq.heappop(self.maxHeap))
                    heapq.heappush(self.maxHeap, -num)
            else:
                if self.minHeap[0] > num:
                    heapq.heappush(self.maxHeap, -num)
                else:
                    heapq.heappush(self.maxHeap, -heapq.heappop(self.minHeap))
                    heapq.heappush(self.minHeap, num)
            



        

    def findMedian(self) -> float:
        length = len(self.minHeap) + len(self.maxHeap)
        if length%2 == 0:
            return (self.minHeap[0] - self.maxHeap[0])/2
        else:
            return -self.maxHeap[0]
        

        
        