class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        count = {}
        res = []
        for ch in s:
            count[ch] = count.get(ch, 0) + 1

        spanlen = 0
        partitionCount = {}

        def checkChars():
            for key, value in partitionCount.items():
                if value != count[key]:
                    return False
            return True

        for i in range(len(s)):
            partitionCount[s[i]] = partitionCount.get(s[i], 0) + 1
            spanlen += 1
            if len(partitionCount) !=0 and checkChars():
                res.append(spanlen)
                partitionCount = {}
                spanlen = 0
                continue
            
            

        return res