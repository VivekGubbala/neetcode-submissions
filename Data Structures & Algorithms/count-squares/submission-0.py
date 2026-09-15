class CountSquares:

    def __init__(self):
        self.points = defaultdict(int)
        # self.points = []

    def add(self, point: List[int]) -> None:
        # self.points.append(tuple(point))
        self.points[tuple(point)] += 1

    def count(self, point: List[int]) -> int:
        result = 0
        px, py = point
        for i in self.points.copy():
            x,y = i
            if abs(px -x) != abs(py - y) or px == x or py == y:
                continue
            result += self.points[(x,y)]*self.points[(px, y)]*self.points[(x,py)]
        return result
        
