class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        res = []
        for i in range(len(points)):
            res.append((points[i][0]**2 + points[i][1]**2, points[i]))
        heapq.heapify(res)
        result = []
        for i in range(k):
            x = heapq.heappop(res)
            result.append(x[1])
        return result

