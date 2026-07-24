class TimeMap:

    def __init__(self):
        self.store = {}
        

    def set(self, key: str, value: str, timestamp: int) -> None:
        if key not in self.store:
            self.store[key] = [[timestamp, value]]
        else:
            self.store[key].append([timestamp, value])

    def get(self, key: str, timestamp: int) -> str:
        if key not in self.store or self.store[key][0][0] > timestamp:
            return ""
        length = len(self.store[key])
        l = 0
        r = length -1
        if self.store[key][l][0] == timestamp:
                return self.store[key][l][1]

        if self.store[key][r][0] <= timestamp:
                return self.store[key][r][1]
        

        while r-l > 1:
            p = (r+l)//2
            if self.store[key][p][0] == timestamp:
                return self.store[key][p][1]
            
            if self.store[key][p][0] > timestamp:
                r = p
            else:
                l = p

        return self.store[key][l][1]
