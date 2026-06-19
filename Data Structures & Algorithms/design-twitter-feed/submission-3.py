class Twitter:

    def __init__(self):
        self.time = 0
        self.tweetsMap = {}  #userid -> list of tweets[time, tweetid]
        self.followMap = {}

        

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.time -= 1
        if userId not in self.tweetsMap:
            self.tweetsMap[userId] = []
        self.tweetsMap[userId].append([self.time, tweetId])
        

    def getNewsFeed(self, userId: int) -> List[int]:
        res = []
        maxHeap = []
        if userId not in self.followMap:
            self.followMap[userId] = set()
        self.followMap[userId].add(userId)
        for follower in self.followMap[userId]:
            if follower in self.tweetsMap and len(self.tweetsMap[follower]):
                index = len(self.tweetsMap[follower]) -1
                maxHeap.append([self.tweetsMap[follower][index][0], self.tweetsMap[follower][index][1], index -1, follower])
        heapq.heapify(maxHeap)
       
        while maxHeap and len(res) <10:
            time, tweetId, index, followerId = heapq.heappop(maxHeap)
            res.append(tweetId)
            if index >= 0:
                heapq.heappush(maxHeap, [self.tweetsMap[followerId][index][0], self.tweetsMap[followerId][index][1], index -1, followerId ])


        return res
        

    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId not in self.followMap:
            self.followMap[followerId] = set()
        self.followMap[followerId].add(followeeId)
        

    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followeeId in self.followMap[followerId]:
            self.followMap[followerId].remove(followeeId)
