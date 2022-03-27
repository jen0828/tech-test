# Coding Challenge

Complete four coding exercises below in three hours.

----------
Question 1 
---
A text file contains a list of numbers, one per line.

Write a program to print out the five most commonly occurring numbers, one per line, in descending order of frequency, and without surrounding whitespace.

This should be a shell pipeline (i.e. a bash one-liner); use of perl, awk, sed or any other programming language should be avoided.

 - Print only the numbers themselves, not their frequencies
 - Assume the input file will be well formatted (containing only numbers)

**Solution:**
 ```
$ sort file.txt| uniq -c | sort -nr |cut -c 6- |head -n 5 
4
1
6
5
3
```

----------
Question 2
---

Solve the same problem as above within a single file of Python, C# or JavaScript.

**Solution:**

See [topFiveNums.js](./topFiveNums.js) with jest testing [topFiveNums.test.js](./topFiveNums.test.js) 

**Note:**

* Input : a string ( example - '1\n2\n3\n4\n5\n5' )
* Output : a string (example - '5\n1\n2\n3\n4' )
* Assumption: When the output of the top five numbers is less than five numbers, it will show as it is without an error.
* Edge case: When the file is empty, it should throw an error.

----------
Question 3 
---

A Python method needs to process a large number of database records.

If each record is processed individually, then there will be one round trip to the database for each record; this results in a large number of separate database queries and a slow overall run time. If all records are processed as a single batch, then the system will run out of memory.

A single database search has completed and returned an iterable "records" that will yield each database record identifier in turn, in order that the records may then be processed.

For example, the following methods implement the two deficient options described above:
```
  # Method 1
  # Processing records individually (very slow):
  for index, record in enumerate(records):
      print("Processing record %d" % index)
      process([record])

  # Method 2
  # Processing all records as a single batch (runs out of memory):
  all_records = list(records)
  print("Processing records 0-%d" % (len(all_records) - 1))
  process(all_records)

For optimal performance, records should be processed in batches. Given the following logic, please implement the "batched" generator function to enable this method of processing:

  # Method 3.
  # Processing records in batches of 1000 (optimal):
  for subrange, batch in batched(records, size=1000):
      print("Processing records %d-%d" %
        (subrange[0], subrange[-1]))
      process(batch)
```
**Solution:**

See JavaScript version of the solution [here](./getBatch.js)

**Screenshot:**

![Screenshot 2022-03-27 at 08 48 52](https://user-images.githubusercontent.com/79845719/160272776-6b36930c-40ec-4f46-85db-578b4131b102.png)

----------
Question 4
---
Deploy a webpage that solves question 1. The user should be able to upload the text file and see the top 5 most frequent numbers as a result. Please provide a link to your solution.

**Solution:**
* The website's been deployed here: https://jen0828.github.io/coding-challenge/

## Technologies used
* JavaScript
* Node v16.13.1
* Jest for testing
* Bash one-liners
* GitHub Pages Deployment

## Installation
### To clone the repo
```shell
$ git clone https://github.com/jen0828/coding-challenge
$ cd coding-challenge
```

### To run the app
``` shell
$ npm install
$ open index.html
```

### To test 
```shell
$ npm test
```

