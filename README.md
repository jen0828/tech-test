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
$ sort file.txt| uniq -c | sort -nr |cut -c 5- |head -n 5 

```

----------
Question 2
---

Solve the same problem as above within a single file of Python, C# or JavaScript.

**Design Note:**

* Input : a string ( example - '1\n2\n3\n4\n5\n5' )
* Output : a string (example - '5\n1\n2\n3\n4' )

* Assumption: When the output of the top five numbers is less than five numbers, it will show as it is without an error.
* Edge case: When the file is empty, it should throw an error.

----------
Question 3 
---

Create a Python method - see text.file

----------
Question 4
---
Deploy a webpage that solves question 1. The user should be able to upload the text file and see the top 5 most frequent numbers as a result. Please provide a link to your solution.

**Solution:**
* The website's been deployed here: https://jen0828.github.io/coding-challenge/

## Installation
### To clone the repo
```shell
$ git clone https://github.com/jen0828/coding-challenge
$ cd coding-challenge
```

### To run React app
``` shell
$ npm install
$ open index.html
```

### To test 
```shell
$ npm test
```
