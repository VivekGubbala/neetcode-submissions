class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        res = []
        intervals = sorted(intervals, key=lambda x:(x[0], x[1]))
        for i in range(len(intervals)):
            if len(res) == 0:
                res.append(intervals[i])
                continue
            if res[-1][1] >= intervals[i][0]:
                res[-1][1] = max(res[-1][1], intervals[i][1])
            else:
                res.append(intervals[i])
        
        return res
