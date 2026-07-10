class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people: number[], limit: number): number {
        people.sort((a,b)=> a-b);
        let res = 0;
        let l=0, r =people.length -1
        while(l<=r){
            if(people[l]+people[r] <= limit){
                res++;
                l++;
                r--;
            }else{
                res++;
                r--;
            }
        }
        return res;
    }
}
