/*
 * @lc app=leetcode.cn id=17 lang=typescript
 * @lcpr version=30008
 *
 * [17] 电话号码的字母组合
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

function letterCombinations(digits: string): string[] {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }  

  const result: string[] = []
  const backtrack = (index: number, current: string) => {
    if (current.length === digits.length) {
      result.push(current)
      return
    }

    const litters = map[digits[index]]
    for (let key of litters) { 
      backtrack(index + 1, current + key)
    }
  }

  if (digits.length === 0) return []

  backtrack(0, '')
  return result
};
// @lc code=end



/*
// @lcpr case=start
// "23"\n
// @lcpr case=end

// @lcpr case=start
// ""\n
// @lcpr case=end

// @lcpr case=start
// "2"\n
// @lcpr case=end

 */

