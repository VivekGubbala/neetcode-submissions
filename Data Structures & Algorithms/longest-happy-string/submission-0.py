class Solution:
    def longestDiverseString(self, a: int, b: int, c: int) -> str:
        maxHeap = []
        if a:
            maxHeap.append([-a, 'a'])
        if b:
            maxHeap.append([-b, 'b'])
        if c:
            maxHeap.append([-c, 'c'])

        heapq.heapify(maxHeap)
        res = []
        prev = None

        while maxHeap or prev:
            if not maxHeap and prev:
                return "".join(res)
            
            count, letter = heapq.heappop(maxHeap)
            count += 1
            res.append(letter)
            if prev:
                heapq.heappush(maxHeap, prev)
                prev = None
            if count != 0:
                if len(res) > 1 and res[-1] == letter and res[-2] == letter:
                    prev = [count, letter]
                else:
                    heapq.heappush(maxHeap, [count, letter])
                
            
            
        return "".join(res)
                
            
            