const topFiveFrequentNumbers = require('./topFiveNum.js');

describe('#topFiveFrequentNumbers', () => {
  describe(' when output is less than five numbers', () => {
    it('should print out original string', () => {
      expect(topFiveFrequentNumbers('1', 5)).toBe('1');
    });

    it('should print out 2 numbers in a string', () => {
      expect(topFiveFrequentNumbers('2\n1', 5)).toBe('1\n2');
    });
  });

  describe(' When output is top five numbers', () => {
    it('should print out all numbers in the original string', () => {
      expect(topFiveFrequentNumbers('5\n4\n3\n2\n1', 5)).toBe('1\n2\n3\n4\n5');
    });

    it('should print out a new string of numbers in descending order', () => {
      expect(topFiveFrequentNumbers('1\n2\n3\n4\n5\n5', 5)).toBe(
        '5\n1\n2\n3\n4'
      );
    });

    it('should print out a new string of numbers in descending order', () => {
      expect(
        topFiveFrequentNumbers('1\n2\n3\n4\n5\n5\n5\n5\n4\n4\n4\n4\n4', 5)
      ).toEqual('4\n5\n1\n2\n3');
    });
  });

  // Edge case

  it('should throw an error when the file is empty', () => {
    expect(() => {
      topFiveFrequentNumbers('', 5);
    }).toThrow('File is empty!');
  });
});
