/*
 * @lc app=leetcode.cn id=268 lang=typescript
 *
 * [268] 丢失的数字
 */

// @lc code=start
function missingNumber(nums: number[]): number {
  let signle = nums.length;
  for (let i = 0; i < nums.length; i++) { 
    signle = signle ^ i ^ nums[i]
  }
  return signle
};
// @lc code=end

