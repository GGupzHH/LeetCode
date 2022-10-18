/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  let single = 0
  for (let i = 0; i < nums.length; i++) { 
    single = single ^ nums[i]
  }
  
  return single
};
// @lc code=end

