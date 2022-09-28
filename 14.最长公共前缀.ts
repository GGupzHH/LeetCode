/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 * 
 * 还有一种解法就是使用map，map去一次set，key是当前字符，value是个数，最后迭代map
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let str = ''
  const firstLen = strs[0].length
  for (let i = 0; i < firstLen; i++) {
    const currenStr = strs[0][i]
    let sum = 0
    for (let j = 1; j < strs.length; j++) { 
      if (currenStr === strs[j][i]) { 
        sum++
      }
    }
    if (sum === strs.length - 1) {
      str += currenStr
    } else { 
      return str
    }
  }
  return str
};
// @lc code=end

