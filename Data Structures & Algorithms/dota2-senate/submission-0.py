class Solution:
    def predictPartyVictory(self, senate: str) -> str:
        currR = senate.find("R")
        currD = senate.find("D")
        
        i = 0
        while currR < len(senate) and currD < len(senate):
            if senate[i] == "R" and currR != i:
                i += 1
                continue
            if senate[i] == "D" and currD != i:
                i += 1
                continue
            
            if senate[i] == "R":
                senate += "R"
            else:
                senate += "D"

            currD += 1
            while  currD < len(senate) and senate[currD] != "D":
                currD += 1
            currR += 1
            while  currR < len(senate) and senate[currR] != "R":
                currR += 1 
            i+= 1


        return "Dire" if senate[-1] == "D" else "Radiant" 
        