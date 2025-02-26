/*
 * @lc app=leetcode.cn id=171 lang=typescript
 * @lcpr version=20004
 *
 * [171] Excel 表列序号
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function titleToNumber(columnTitle: string): number {
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
      // 获取当前字符的值 (A = 1, B = 2, ..., Z = 26)
      const charValue = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
      // 按照 26 进制计算列序号
      result = result * 26 + charValue;
  }
  return result;
};
// @lc code=end



/*
// @lcpr case=start
// "A"\n
// @lcpr case=end

// @lcpr case=start
// "AB"\n
// @lcpr case=end

// @lcpr case=start
// "ZY"\n
// @lcpr case=end

 */

