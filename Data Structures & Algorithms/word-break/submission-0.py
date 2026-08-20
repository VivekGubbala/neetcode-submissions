class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        wordCache = set(wordDict)
        maxlen = max([len(i) for i in wordDict])
        dpcache = [True]

        for i in range(len(s)):
            j = i
            flag = False
            while j >= 0 and (i-j) <= maxlen:
                if s[j:i+1] in wordCache and dpcache[j] == True:
                    flag = True
                    break
                j-=1

            dpcache.append(flag)


        return dpcache[-1]
