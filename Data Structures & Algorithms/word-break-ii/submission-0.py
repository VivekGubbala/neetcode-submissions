class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        lookup = set(wordDict)
        res = []
        def backtrack(i, curr_s):
            if i == len(s):
                if curr_s.replace(" ", "") == s and curr_s[-1] == " ":
                    res.append(curr_s[:-1])
                return
            curr_s += s[i]
            backtrack(i+1, curr_s)
            last_word = curr_s.split(" ")[-1]
            if last_word in lookup:
                backtrack(i+1, f"{curr_s} ")

            return
        backtrack(0, "")
        return res