/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  const set = new Set()

  const getSum = (n: number) => {
    let sums = 0
    while (n >= 1) { 
      sums += Math.pow(n % 10, 2)
      n = Math.trunc(n / 10)
    }
    if (sums === 1) {
      return true
    }
    
    if (set.has(sums)) { 
      return false
    }
    set.add(sums)
    
    return getSum(sums)
  }
  
  
  return getSum(n)
};
// @lc code=end

