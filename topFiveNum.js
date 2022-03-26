const topFiveFrequentNumbers = function (string, myNum = 5) {
  let new_array = string.split('\n');
  let result = [];

  new_array.forEach((num) => {
    result.push(num);
  });

  return result.join('\n');
};

module.exports = topFiveFrequentNumbers;
