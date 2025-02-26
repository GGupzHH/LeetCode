/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0) return false

  if (x < 10) return true

  let y = x
  const xLength = parseInt(x as any).toString().length
  let sum = 0
  let iteration = parseInt(x as any).toString().length - 1

  while (iteration >= 0 && iteration < xLength) { 
    const remainder = y % 10
    sum += remainder * Math.pow(10, iteration)

    y = (y - remainder) / 10
    iteration--
  }

  return sum === x
};
// @lc code=end

