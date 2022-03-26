const topFiveFrequentNumbers = require('./topFiveNum.js');

describe('#topFiveFrequentNumbers', () => {

  describe(' when output is less than five numbers', () => {
    it('should print out original string', () => {
      expect(topFiveFrequentNumbers('1', 5)).toBe('1');
    });
  });
});
