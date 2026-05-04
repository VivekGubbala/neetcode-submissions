class MinStack {
    constructor() {
        this.stack = []
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if(this.min.length==0){
            this.min.push(val)
        }else{
            let temp = this.min[this.min.length -1] > val ? val : this.min[this.min.length -1]
            this.min.push(temp);
        }
        return
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.min.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1]
    }
}
