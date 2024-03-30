/*
Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).

Example 1:
Input: n = 11
Output: 3

Explanation:
The input binary string 1011 has a total of three set bits.

Example 2:
Input: n = 128
Output: 1

Explanation:
The input binary string 10000000 has a total of one set bit.

Example 3:
Input: n = 2147483645
Output: 30

Explanation:
The input binary string 1111111111111111111111111111101 has a total of thirty set bits.


Constraints:
1 <= n <= 231 - 1


Follow up: If this function is called many times, how would you optimize it?




/**
 * @param {number} n
 * @return {number}
 */
// var hammingWeight = function(n) {

// };

// */

// const hammingWeight = (n) => {
//     // Step 1
//     // 13 / 2 = 6 | remainder 1
//     //  6 / 2 = 3 | remainder 0
//     //  3 / 2 = 1 | remainder 1
//     //  1 / 2 = 0 | remainder 1

//     // Step 2
//     // Write the remainders in the reverse 1101

//     // 11
//     // 11 / 2 = 5 | remainder 1
//     // 5 / 2 = 2 | remainder 1
//     // 2 / 2 = 1 | remainder 0
//     // 1 / 2 = 0 | remainder 1

//     // reverse 1011 | total 1s are 3

//     // let result = 0;
//     // let dividingNumber = n;
//     // const remainderArr = [];

//     // while (dividingNumber > 0) {
//     //     let remainder = dividingNumber % 2;
//     //     let restNumber = Math.floor(dividingNumber / 2);
//     //     remainderArr.push(remainder);
//     //     dividingNumber = restNumber;
//     // }

//     // remainderArr.forEach((num) => {
//     //     if (num === 1) {
//     //         result += 1;
//     //     }
//     // });

//     // console.log(result);
//     // return result;

//     let result = 0;

//     while (n !== 0) {
//         if (n % 2 === 1) {
//             result++;
//         }
//         n = Math.floor(n / 2);
//     }

//     return result;
// };

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Constraints:

// 1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.

// var removeDuplicates = function (nums) {
//     let resultArr = [];

//     // const set = new Set(nums);

//     // result = set.size;

//     for (let i = 0; i < nums.length; i++) {
//         console.log(nums[i]);
//         if (!resultArr.includes(nums[i])) {
//             resultArr.push(nums[i]);
//         }
//     }

//     console.log(resultArr);
//     return resultArr;
// };

// var removeDuplicates = function (nums) {
//     if (nums.length === 0) return 0; // Edge case when the array is empty

//     let k = 1; // Initialize k to 1 because the first element is always unique

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[i - 1]) {
//             // Check for duplicates
//             nums[k++] = nums[i]; // Replace duplicates with unique elements
//         }
//     }

//     return k; // Return the count of unique elements
// };

// removeDuplicates([1, 1, 2]); // 2
// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]); // 5

// module.exports = removeDuplicates;
// module.exports = hammingWeight;

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    // [1, 3, 5, 6]
    //  0, 1, 3, 4
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        // console.log(nums[i]);
        // console.log(target);

        if (nums[i] === target) {
            console.log(index = i);
            return index = i;
        }

        if (nums[i] < target && nums[i + 1] > target) {
            console.log(i + 1);
            return index = i + 1;
        } else {
            console.log(i + 1);
            return index = i + 1;
        }

        // if(nums[nums.length - i] < target){
        //     console.log(i, target)
        // }
    }

    // console.log(index);
    // return index;
};

searchInsert([1, 3, 5, 6], 5); // 2
searchInsert([1, 3, 5, 6], 2); // 1
searchInsert([1, 3, 5, 6], 7); // 4
