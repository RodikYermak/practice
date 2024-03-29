const hammingWeight = require('./practice');

test('Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).', () => {
    expect(hammingWeight(11)).toEqual(3);
    expect(hammingWeight(128)).toEqual(1);
    expect(hammingWeight(2147483645)).toEqual(30);
});
