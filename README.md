# Solution for TechyWe JS-Developer interview

## 1. Steps to run the project

### 1.1. Clone the repository

```bash
git clone git@github.com:crehds/js-solutions-carlos-rodriguez.git
```

### 1.2. Install dependencies

```bash
npm install
```

### 1.3. Run the tests

```bash
npm run test || npm run test:watch
```

## 2. Problems

### 2.1. Is a Triangle?

> Develop a method that accepts 3 integer values. The function should return
true if a triangle can be constructed with sides of the given length and false in any other case.
any other case.
(In this case, all triangles must have an area greater than 0 to be accepted.
accepted).

### - Solution: [isTriangle.js](./src/isTriangle/isTriangle.js)

### 2.2. Longest Consec

> Using a variable array of strings and an integer number R. Perform a function that
returns the first longest string consisting of R consecutive strings taken from the array.
the array.
Examples:
variable = ["abcd", "efghij", "klmnop", "qrst", "count", "uvwxyz"], k = 2.
Concatenating the consecutive variable strings by 2, we obtain:
abcdefghij (length 10) concatenation of variable[0] and variable[1].
efghijklmnop (" 12) concatenation of variable[1] and variable[2].
klmnopqrst (" 10) concatenation of variable[2] and variable[3]
qrstcuenta (" 10) concatenation of variable [3] and variable [4].
cuentauvwxyz (" 12) concatenation of variable[4] and variable[5].
Two strings are the longest: " efghijklmnop" and " cuentauvwxyz".
The first one you have is " efghijklmnop", so the method should return "
efghijklmnop".

**Note
consecutive strings: they follow one after the other without interruption**

### - Solution: [longestConsec.js](./src/longestConsec/longestConsec.js)

### 2.3. Josephus Permutation

> You must create a function that returns a permutation of Josephus, taking as parameters an initial array of elements to be permuted as if they were in a circle.
parameters an initial array of elements to permute as if they were in a circle and count every k places until there are none left.
count every k places until there are none left.
Tips and notes: it helps to start counting from 1 to n, instead of the usual range of 0 to n-1; k always counts from 1 to n, instead of the usual range of 0 to n-1.
0 to n-1; k will always be >=1.
For example, with a matrix=[1,2,3,4,5,6,7] and k=3, the function should act like this.
way.
The function should act like this:
>>n=7, e=3 => you have 7 elements and the third element in the position is removed each time until 1 remains.
until 1 remains.
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => the 3 is eliminated.
[1,2,4,5,7] => the 6 is eliminated
[1,4,5,7] => 2 is eliminated, etc.

In the following link you can document about the [Josephus permutation](http://en.wikipedia.org/wiki/Josephus_problem)

### - Solution: [josephusPermutation.js](./src/josephusPermutation/josephusPermutation.js)
