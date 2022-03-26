const topFiveFrequentNumbers = function (string, myNum = 5) {
  let new_array = string.split('\n');
  let freq = {};
  let result = [];

  if (string === '') {
    throw new Error('File is empty!');
  }

  new_array.forEach((num) => {
    if (freq[num]) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  });

  let array = Object.entries(freq);

  array.sort((a, b) => {
    return b[1] - a[1];
  });

  array.slice(0, myNum).forEach((element) => result.push(element[0]));

  //return result.join('\n');
  result.forEach((element) => document.write(element + '<br>'));
};
