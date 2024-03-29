/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {

  const maxDepth = (root: TreeNode | null) => { 
    if (root === null) { 
      return 0
    }

    const leftMax = maxDepth(root.left)
    const rightMax = maxDepth(root.right)
    return 1 + Math.max(leftMax, rightMax)
  }

  return maxDepth(root)

};
// @lc code=end

