class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        newArray = [(abs(i-x), i) for i in arr]

        newArray.sort(key=lambda x:(x[0], x[1]))

        return sorted([ i[1] for i in newArray[:k]])