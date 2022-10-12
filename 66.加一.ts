/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  let isEnter: number = 1
  for (let i = digits.length - 1; i >= 0; i--) { 
    if (isEnter + digits[i] > 9) {
      digits[i] = 0
      isEnter = 1
    } else { 
      digits[i] += 1
      isEnter = 0
      return digits
    }
  }
  if (isEnter) { 
    digits.unshift(1)
  }
  return digits
};
// @lc code=end

