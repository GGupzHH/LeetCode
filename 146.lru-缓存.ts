/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
class LRUCache {
    private map: Map<number, number>
    private capacity: number
    private iterator: IterableIterator<number>
    constructor(capacity: number) {
        const map = new Map()

        this.map = map
        this.capacity = capacity
        this.iterator = map.keys()
    }

    get(key: number): number {
        if (this.map.has(key)) {
            const value: number = this.map.get(key) as number
            this.map.delete(key)
            this.map.set(key, value)
            return value
        } else {
            return -1
        }
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            this.map.set(key, value)
            this.get(key)
            return
        } else if (this.map.size === this.capacity) { 
            const oldkey: number = this.iterator.next().value
            this.map.delete(oldkey)
        }
        
        this.map.set(key, value)
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

