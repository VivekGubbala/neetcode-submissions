class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:
        # 0000  -> increatmet / decrement each digit position

        # maintain a set of tried combinations to avoid overlap
        # bfs

        tried = set(deadends)

        queue = deque()
        queue.append(["0000", 0])

        def nextturn(combo, turn):
            for i in range(len(combo)):
                num = int(combo[i])

                incnum = combo[:i] + str((num+1)%10) + combo[i+1:] 
                if incnum not in tried:
                    queue.append([incnum, turn])
                decnum = combo[:i] + str((num-1 + 10)%10) + combo[i+1:]
                if decnum not in tried:
                    queue.append([decnum, turn])



        while queue:
            combination, turns = queue.popleft()
            if combination == target:
                return turns
            
            if combination not in tried:
                tried.add(combination)
                nextturn(combination, turns+1)

        return -1

