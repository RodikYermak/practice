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
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
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

/*
There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

Example 1:

Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.
Example 2:

Input: operations = ["++X","++X","X++"]
Output: 3
Explanation: The operations are performed as follows:
Initially, X = 0.
++X: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
X++: X is incremented by 1, X = 2 + 1 = 3.
Example 3:

Input: operations = ["X++","++X","--X","X--"]
Output: 0
Explanation: The operations are performed as follows:
Initially, X = 0.
X++: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
--X: X is decremented by 1, X = 2 - 1 = 1.
X--: X is decremented by 1, X = 1 - 1 = 0.



*/

const finalValueAfterOperations = (operations) => {
    console.log(operations);
    let result = 0;

    operations.forEach((operation) => {
        if (operation.includes('-')) {
            result -= 1;
        } else {
            result += 1;
        }
    });

    console.log(result);
    return result;
};

/*

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

Example 1:

Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7]
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
Example 2:

Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]
Example 3:

Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]


*/

const shuffle = (nums, n) => {
    console.log(nums, n);
    const resArr = [];

    for (let i = 0; i < nums.length / 2; i++) {
        resArr.push(nums[i], nums[i + n]);
    }
    console.log(resArr);
    return resArr;
};

// shuffle([2, 5, 1, 3, 4, 7], 3);

/* 

You are given a 0-indexed array of strings words and a character x.

Return an array of indices representing the words that contain the character x.

Note that the returned array may be in any order.

 

Example 1:

Input: words = ["leet","code"], x = "e"
Output: [0,1]
Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
Example 2:

Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
Output: [0,2]
Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.
Example 3:

Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
Output: []
Explanation: "z" does not occur in any of the words. Hence, we return an empty array.


*/

const findWordsContaining = (words, x) => {
    console.log(words, x);
    const arr = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            arr.push(i);
        }
    }

    console.log(arr);
    return arr;
};

// findWordsContaining(["leet","code"], "e");

/*
You are given a 0-indexed integer array nums, and an integer k.

In one operation, you can remove one occurrence of the smallest element of nums.

Return the minimum number of operations needed so that all elements of the array are greater than or equal to k.

 

Example 1:

Input: nums = [2,11,10,1,3], k = 10
Output: 3
Explanation: After one operation, nums becomes equal to [2, 11, 10, 3].
After two operations, nums becomes equal to [11, 10, 3].
After three operations, nums becomes equal to [11, 10].
At this stage, all the elements of nums are greater than or equal to 10 so we can stop.
It can be shown that 3 is the minimum number of operations needed so that all elements of the array are greater than or equal to 10.
Example 2:

Input: nums = [1,1,2,4,9], k = 1
Output: 0
Explanation: All elements of the array are greater than or equal to 1 so we do not need to apply any operations on nums.
Example 3:

Input: nums = [1,1,2,4,9], k = 9
Output: 4
Explanation: only a single element of nums is greater than or equal to 9 so we need to apply the operations 4 times on nums.

*/

const minOperations = (nums, k) => {
    let count = 0;
    // console.log(nums, k);

    for(let i = 0; i < nums.length; i++){
        // console.log(nums[i]);
        if(nums[i] < k){
            count += 1;
        }
    }

    console.log(count);
    return count;
};

// minOperations([2, 11, 10, 1, 3], 10);


/*
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

 

Example 1:


Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]
Example 2:


Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]



*/

const matrixReshape = (mat, r, c) => {
    const m = mat.length; // Number of rows in the original matrix
    const n = mat[0].length; // Number of columns in the original matrix

    // Check if reshaping is possible
    if (m * n !== r * c) {
        // Reshaping not possible, return the original matrix
        return mat;
    }
}

matrixReshape([[1,2],[3,4]], 1, 4);



// module.exports = twoSums;
// module.exports = getConcatenation;
// module.exports = numIdenticalPairs;
// module.exports = finalValueAfterOperations;
// module.exports = shuffle;
// module.exports = findWordsContaining;
module.exports = minOperations;
