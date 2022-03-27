// Q3. Assumption : records is an array

// generate some data in an array
function numberRange(start, end) {
  return new Array(end - start).fill().map((d, i) => i + start);
}
const records = numberRange(0, 2000);

// implement the 'getBatch' generator function that yields 1000 items at a time
function* getBatch(records, size = 1000) {
  while (records.length) {
    yield records.splice(0, size); // return generator Object/ iterable
  }
}

for (let batch of getBatch(records)) {
  console.log(`Processing records ${batch[0]} - ${batch[batch.length - 1]}`);
  console.log(batch);
  // do something with 1000 items at a time
  // process(batch)
}