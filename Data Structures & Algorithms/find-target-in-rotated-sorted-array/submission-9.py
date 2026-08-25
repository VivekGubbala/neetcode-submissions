class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if len(nums) == 1:
            return 0 if nums[0] == target else -1
        
        rotated = True if nums[0] > nums[-1] else False
        # rotated = True

        def bs(l,r):
            if nums[l]== target:
                return l
            if nums[r]== target:
                return r
            while r-l>1:
                p = (r+l)//2
                if nums[p] == target:
                    return p
                if nums[p] > target:
                    r=p
                else:
                    l=p
            return -1
        
        if not rotated:
            return bs(0, len(nums)-1)

        # find the rotation point
        l=0
        r=len(nums)-1
        # if nums[l]== target or nums[r]== target:
        #     return True
        while r-l > 1:
            p = (r+l)//2
            # if nums[l] == nums[r]:
            #     l+=1
            #     continue
            if nums[p] < nums[r]:
                r=p
                # r-=1
            else:
                l=p
                # l+=1
        print(l,r)
        res = bs(0, l)
        return res if res != -1 else bs(r, len(nums)-1)
      
                



