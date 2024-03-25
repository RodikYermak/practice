// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

const twoSums = (nums, target) => {
    const indexMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        if (indexMap.has(complement)) {
            return [indexMap.get(complement), i];
        }

        indexMap.set(currentNum, i);
    }

    return [];
};

/*

Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
Example 2:

Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]
*/
const getConcatenation = (nums) => {
    const ans = [];

    nums.forEach((num) => {
        ans.push(num);
    });

    nums.forEach((num) => {
        ans.push(num);
    });

    return ans;
};

/*
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0
*/

const numIdenticalPairs = (nums) => {
    let count = 0;
    // console.log(nums);
    for(let i = 0; i < nums.length - 1; i++){
        for (let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                count += 1;
            }
        }
    }

    console.log(count);
    return count;
    // let count = 0;

    // const freqMap = new Map();

    // for (const num of nums) {
    //     if (freqMap.has(num)) {
    //         count += freqMap.get(num);
    //         freqMap.set(num, freqMap.get(num) + 1);
    //     } else {
    //         freqMap.set(num, 1);
    //     }
    // }

    // return count;
};

numIdenticalPairs([1, 2, 3, 1, 1, 3]);

// module.exports = twoSums;
// module.exports = getConcatenation;
module.exports = numIdenticalPairs;
