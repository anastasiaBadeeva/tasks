'use strict';
const arr = [2, 5, [4, 6, [1, 5, [8, 1]]], 5, 10];

const arrSum = array =>
    array.reduce(
        (sum, num) => sum + (Array.isArray(num) ? arrSum(num) : num * 1),
        0
    );

console.log(arrSum(arr));

 
  