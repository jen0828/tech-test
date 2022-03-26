const topFiveFrequentNumbers = require('./topFiveNum.js');

describe('#topFiveFrequentNumbers', () => {
  describe(' when output is less than five numbers', () => {
    it('should print out original string', () => {
      expect(topFiveFrequentNumbers('1', 5)).toBe('1');
    });

    it('should print out 2 numbers in a string', () => {
      expect(topFiveFrequentNumbers('2\n1', 5)).toBe('2\n1');
    });
  });
});
