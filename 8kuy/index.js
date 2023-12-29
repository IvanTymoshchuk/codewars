// --------------------------------

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

//! Given an array of integers, return a new array with each value doubled.

// For example:
// [1, 2, 3] --> [2, 4, 6]

function maps(x) {
  return x.map((value) => value * 2);
}
// console.log(maps([1, 2, 3]), [2, 4, 6]);

// --------------------------------

//! You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.
// Note: only positive integers will be tested.

function otherAngle(a, b) {
  return 180 - (a + b);
}

// console.log(otherAngle(30, 60), 90);
// --------------------------------

//---------------------------------

//! Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').Create a function which translates a given DNA string into RNA.

//* The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

// Приклад використання:
// console.log(DNAtoRNA("TTTT"));
// console.log(DNAtoRNA("GCAT"));
// console.log(DNAtoRNA("GACCGCCGCC"));


