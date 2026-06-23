class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        arivalHeap = [ [trip[1], trip[0], trip[2]] for trip in trips]
        heapq.heapify(arivalHeap)
        departureHeap = []
        currentCapacity = 0
        while arivalHeap:
            arivalTime, passengers, departureTime = heapq.heappop(arivalHeap)
            while departureHeap and departureHeap[0][0] <= arivalTime:
                vacateTime, exitPassengers = heapq.heappop(departureHeap)
                currentCapacity -= exitPassengers
            if currentCapacity + passengers <= capacity:
                heapq.heappush(departureHeap, [departureTime, passengers])
                currentCapacity += passengers
            else:
                return False
        # print(arivalHeap)
        return True