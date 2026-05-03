class MyQueue {

    constructor() {
        this.stack1 = []
        this.stack2 = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stack1.push(x)
        return 
    }

    /**
     * @return {number}
     */
    pop() {
        console.log("hell pop", this.stack1, this.stack2)
        if(this.stack2.length){
            return this.stack2.pop()
        }
        while(this.stack1.length){
            this.stack2.push(this.stack1.pop())
        }
        return this.stack2.pop()
    }

    /**
     * @return {number}
     */
    peek() {
        if(this.stack2.length){
            return this.stack2[this.stack2.length -1]
        }
        while(this.stack1.length){
            this.stack2.push(this.stack1.pop())
        }
        return this.stack2[this.stack2.length -1]
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.stack1.length === 0 && this.stack2.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
