class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        count = Counter(tasks)
        maxHeap = [-ctx for ctx in count.values()]
        heapq.heapify(maxHeap)
        q = deque()
        time = 0
        while maxHeap or q:
            time += 1
            if maxHeap:
                ptask = heapq.heappop(maxHeap) +1
                if ptask < 0:
                    q.append([ptask, time + n])
            
            if q and q[0][1] == time:
                heapq.heappush(maxHeap, q.popleft()[0])


        return time