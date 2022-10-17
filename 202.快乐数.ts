/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  let sum = n;
  const sets = new Set()
  while (sum !== 1) { 
    const singleList: Array<string> = (sum + '').split('')
    sum = 0
    for (let i = 0; i < singleList.length; i++) { 
      let single: any = singleList[i]
      sum += Math.pow((single - 0), 2)
    }
    if (sets.has(sum)) {
      return false
    }
    sets.add(sum)
    console.log(sum)
  }
  return true
};
// @lc code=end

