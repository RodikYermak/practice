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

const hammingWeight = (n) => {
    // Step 1
    // 13 / 2 = 6 | remainder 1
    //  6 / 2 = 3 | remainder 0
    //  3 / 2 = 1 | remainder 1
    //  1 / 2 = 0 | remainder 1

    // Step 2
    // Write the remainders in the reverse 1101

    // 11
    // 11 / 2 = 5 | remainder 1
    // 5 / 2 = 2 | remainder 1
    // 2 / 2 = 1 | remainder 0
    // 1 / 2 = 0 | remainder 1

    // reverse 1011 | total 1s are 3

    // let result = 0;
    // let dividingNumber = n;
    // const remainderArr = [];

    // while (dividingNumber > 0) {
    //     let remainder = dividingNumber % 2;
    //     let restNumber = Math.floor(dividingNumber / 2);
    //     remainderArr.push(remainder);
    //     dividingNumber = restNumber;
    // }

    // remainderArr.forEach((num) => {
    //     if (num === 1) {
    //         result += 1;
    //     }
    // });

    // console.log(result);
    // return result;

    let result = 0;

    while (n !== 0) {
        if (n % 2 === 1) {
            result++;
        }
        n = Math.floor(n / 2);
    }

    return result;
};

module.exports = hammingWeight;
