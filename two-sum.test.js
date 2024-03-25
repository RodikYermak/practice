const twoSums = require('./two-sum');

test('adds 1 + 2 to equal 3', () => {
    expect(twoSums([3,2,4], 6)).toEqual([1, 2]);
    expect(twoSums([2,7,11,15], 9)).toEqual([0, 1]);
    expect(twoSums([3,2,3], 6)).toEqual([0,2]);
});

