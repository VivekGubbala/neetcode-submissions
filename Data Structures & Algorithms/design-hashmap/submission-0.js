class MyHashMap {
    constructor(val) {
        this.val=[]
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.val[key-1] = [key, value]
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.val[key-1])
            return this.val[key-1][1]
        return -1
        
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.val[key-1] = null
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
