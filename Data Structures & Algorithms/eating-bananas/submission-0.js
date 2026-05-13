class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    checkCleareance(piles, h, k){
        let time = 0;
        for(let i=0; i<piles.length; i++){
            time += Math.ceil(piles[i]/k)
            if(time > h){
                return false
            }
        }
        if(time <=h){
            return true
        }
        return false
    }
    minEatingSpeed(piles, h) {
        piles.sort((a,b)=>a-b);
        let cap = Math.floor(h/piles.length);
        let r = Math.ceil(piles[piles.length -1]/cap)
        let l = 1;
        // let k =cap
        while(r-l >1){
            let p = Math.ceil((l+r)/2)
            if(this.checkCleareance(piles, h, p)){
                r = p;
            }else{
                l = p;
            }
        }
        // console.log("hell", r, l)
        // if(this.checkCleareance(piles, h, r)){
        //     return r
        // }
        // console.log("hell", piles, cap)
        return r
    }
}
