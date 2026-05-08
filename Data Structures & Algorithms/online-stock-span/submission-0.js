class StockSpanner {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        
        // if(this.stack.length == 0){
        //     console.log("hell ", this.stack, price)
        //     this.stack.push(price);
        //     return null
        // }
        this.stack.push(price);

        let res = 0;
        for(let i = 0; i < this.stack.length ; i++ ){
            if(this.stack[this.stack.length - 1 - i] > price)
            {
                break;
            }
            res++;
        }
        return res
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
