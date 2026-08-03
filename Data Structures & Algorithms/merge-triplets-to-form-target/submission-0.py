class Solution:
    def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:
        first = False
        second = False
        third = False

        for ele1, ele2, ele3 in triplets:
            if ele1 == target[0] and ele2 <= target[1] and ele3 <= target[2]:
                first = True
            if ele2 == target[1] and ele1 <= target[0] and ele3 <= target[2]:
                second = True
            if ele3 == target[2] and ele1 <= target[0] and ele2 <= target[1]:
                third = True

        return first and second and third