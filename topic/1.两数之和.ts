/*
 * @lc app=leetcode.cn id=1 lang=typescript
 * 哈希表解法
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const mapping = {}
  for (let i = 0; i < nums.length; i++) { 
    if (mapping[nums[i]] !== undefined) { 
      return [mapping[nums[i]], i]
    }
    mapping[target - nums[i]] = i
  }
};
// @lc code=end
