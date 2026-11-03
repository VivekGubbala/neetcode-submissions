"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def minMeetingRooms(self, intervals: List[Interval]) -> int:
        count, maxcount = 0, 0
        startpoints = sorted([i.start for i in intervals])
        endpoints = sorted([i.end for i in intervals])

        i, j = 0, 0
        while i < len(startpoints):
            if startpoints[i] < endpoints[j]:
                count += 1
                i+= 1
            else:
                count -= 1
                j+=1
            # print(i, j, count)
            maxcount = max(maxcount, count)

        return maxcount
