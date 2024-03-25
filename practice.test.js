// const twoSums = require('./practice');
// const getConcatenation = require('./practice');
const numIdenticalPairs = require('./practice');

// test('Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.', () => {
//     expect(twoSums([3, 2, 4], 6)).toEqual([1, 2]);
//     expect(twoSums([2, 7, 11, 15], 9)).toEqual([0, 1]);
//     expect(twoSums([3, 2, 3], 6)).toEqual([0, 2]);
// });

// test('an array ans of length 2n', () => {
//     expect(getConcatenation([1, 2, 1])).toEqual([1, 2, 1, 1, 2, 1]);
//     expect(getConcatenation([1, 3, 2, 1])).toEqual([1, 3, 2, 1, 1, 3, 2, 1]);
// });

test('Given an array of integers nums, return the number of good pairs', () => {
    expect(numIdenticalPairs([1,2,3,1,1,3])).toEqual(4);
    expect(numIdenticalPairs([1,1,1,1])).toEqual(6);
    expect(numIdenticalPairs([1,2,3])).toEqual(0);
});
