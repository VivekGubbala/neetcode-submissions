class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let l=0,r=x;
        if(x==0 || x== 1){
            return x;
        }
        while(l<r){
            
            let p=Math.floor((l+r)/2);
            let prod = p*p;
            if(prod == x ){
                return p;
            }
            if(r-l==1){
                return l
                // return (x - l*l) > (r*r -x) ? r:l;
            }
            if(prod>x){
                r=p;
            }
            if(prod<x){
                l=p;
            }
        }
    }
}
