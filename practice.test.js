// const twoSums = require('./practice');
// const getConcatenation = require('./practice');
// const numIdenticalPairs = require('./practice');
// const finalValueAfterOperations = require('./practice');
// const shuffle = require('./practice');
// const findWordsContaining = require('./practice');
const minOperations = require('./practice');

// test('Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.', () => {
//     expect(twoSums([3, 2, 4], 6)).toEqual([1, 2]);
//     expect(twoSums([2, 7, 11, 15], 9)).toEqual([0, 1]);
//     expect(twoSums([3, 2, 3], 6)).toEqual([0, 2]);
// });

// test('an array ans of length 2n', () => {
//     expect(getConcatenation([1, 2, 1])).toEqual([1, 2, 1, 1, 2, 1]);
//     expect(getConcatenation([1, 3, 2, 1])).toEqual([1, 3, 2, 1, 1, 3, 2, 1]);
// });

// test('Given an array of integers nums, return the number of good pairs', () => {
//     expect(numIdenticalPairs([1,2,3,1,1,3])).toEqual(4);
//     expect(numIdenticalPairs([1,1,1,1])).toEqual(6);
//     expect(numIdenticalPairs([1,2,3])).toEqual(0);
// });
// test('Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.', () => {
//     expect(finalValueAfterOperations(["--X","X++","X++"])).toEqual(1);
//     expect(finalValueAfterOperations(["++X","++X","X++"])).toEqual(3);
//     expect(finalValueAfterOperations(["X++","++X","--X","X--"])).toEqual(0);
// });
// test('Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].', () => {
//     expect(shuffle([2,5,1,3,4,7], 3)).toEqual([2,3,5,4,1,7]);
//     expect(shuffle([1,2,3,4,4,3,2,1], 4)).toEqual([1,4,2,3,3,2,4,1]);
//     expect(shuffle([1,1,2,2], 2)).toEqual([1,2,1,2]);
// });
// test('Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].', () => {
//     expect(findWordsContaining(["leet","code"], "e")).toEqual([0,1]);
//     expect(findWordsContaining(["abc","bcd","aaaa","cbc"], "a")).toEqual([0,2]);
//     expect(findWordsContaining(["abc","bcd","aaaa","cbc"], "z")).toEqual([]);
// });
test('Return the minimum number of operations needed so that all elements of the array are greater than or equal to k.', () => {
    expect(minOperations([2,11,10,1,3], 10)).toEqual(3);
    expect(minOperations([1,1,2,4,9], 1)).toEqual(0);
    expect(minOperations([1,1,2,4,9], 9)).toEqual(4);
});
