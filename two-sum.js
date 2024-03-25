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
    // console.log(arr, target);

    // 6 - 3 = 3
    // 3 - 2 = 1
    // const arrRes = [];

    // for (let i = 0; i<arr.length; i++){
    //     if((arr[i]+arr[i+1]) === target){
    //         arrRes.push(i, i+1);
    //     }
    // }

    // // console.log(arrRes);
    // return arrRes;
    const indexMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        if (indexMap.has(complement)){
            return [indexMap.get(complement), i];
        }

        indexMap.set(currentNum, i);
    }

    return [];



}

module.exports = twoSums;

