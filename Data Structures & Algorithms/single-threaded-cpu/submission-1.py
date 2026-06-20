class Solution:
    def getOrder(self, tasks: List[List[int]]) -> List[int]:
        for i in range(len(tasks)):
            tasks[i].append(i)
        tasks.sort(key=lambda x:(x[0], x[1], x[2]))
        minHeap = []
        time = tasks[0][0]
        i = 0
        res = []
        while minHeap or i < len(tasks):
            while i < len(tasks) and tasks[i][0] <= time:
                heapq.heappush(minHeap, [tasks[i][1], tasks[i][2]])
                i += 1
            if minHeap:
                tasktime, taskindex =heapq.heappop(minHeap)
                time += tasktime
                res.append(taskindex)
            else:
                time = tasks[i][0]
                # i +=1

        return res
        

        