/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 * 斐波那契数列累加，计算第N个
 */

// @lc code=start
function climbStairs(n: number): number {
  let prev_s = 1
  let prev = 1
  let i = 2
  while(i <= n){
    let news = prev + prev_s
    prev_s = prev
    prev = news
    i++
  }
  return prev
};
// @lc code=end

