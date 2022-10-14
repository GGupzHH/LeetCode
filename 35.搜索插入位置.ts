/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let start: number = 0
  let end: number = nums.length - 1

  if (nums.length === 1) { 
    if (target <= nums[0]) {
      return 0
    } else { 
      return 1
    }
  }

  if (target > nums[end]) { 
    return nums.length
  }

  if (target <= nums[start]) { 
    return 0
  }


  while (start + 1 !== end && nums[start] <= target && target <= nums[end]) { 
    const middle: number = Math.floor((start + end) / 2)
    if (nums[middle] >= target) {
      end = middle
    } else { 
      start = middle
    }
  }

  return end
};
// @lc code=end

