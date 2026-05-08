class StockSpanner {
    constructor() {
        this.stack = []
        this.span = []
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
        let res = 1
        // this.stack.push(price);

        // if(!this.span){
        //     this.span.push(1)
        // }
        while( this.stack[this.stack.length -1 ] <= price ){
            this.stack.pop();
            res += this.span.pop()
        }
        this.stack.push(price);
        this.span.push(res)
        
        return res
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
