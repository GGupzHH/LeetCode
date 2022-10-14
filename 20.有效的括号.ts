/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const mapping: { [key in string]: number | string } = {
    "{": 1,
    "(": 1,
    "[": 1,
    "}": "{",
    ")": "(",
    "]": "["
  }


  const stack: Array<string> = []

  for (let i = 0; i < s.length; i++) { 
    if (mapping[s[i]] === 1) {
      stack.push(s[i])
    } else if(mapping[s[i]] === stack[stack.length - 1]) { 
      stack.pop()
    } else { 
      return false
    }
  }

  return !Boolean(stack.length)
};
// @lc code=end

