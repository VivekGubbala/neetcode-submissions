class MyHashSet {
    constructor(val) {
        this.val=[]
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.val[key -1]=key
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.val[key -1]=null
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        if(this.val[key-1]=== key)
            return true;
        return false
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
