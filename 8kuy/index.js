// --------------------------------
//* Summation
//!  Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

const summation = (n) => (n * (n + 1)) / 2;

// --------------------------------

//! Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

let min = function (list) {
  return Math.min(...list);
};

let max = function (list) {
  return Math.max(...list);
};

// console.log(min([-52, 56, 30, 29, -54, 0, -110], -110));
// console.log(max([4, 6, 2, 1, 9, 63, -134, 566], 566));
// --------------------------------
