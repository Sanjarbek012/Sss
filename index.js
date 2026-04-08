       // amaliyot 
// 1-masala 

// function minimumTotal(triangle) {
//   let dp = [...triangle[triangle.length - 1]];

//   for (let i = triangle.length - 2; i >= 0; i--) {
//     for (let j = 0; j < triangle[i].length; j++) {
//       dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
//     }
//   }

//   return dp[0];
// }

// const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
// console.log("1:", minimumTotal(triangle)); 


// 2-masala  

// function separateAndSort(arr) {
//   const numbers = [];
//   const otherArr = [];

//   for (let item of arr) {
//     if (typeof item === "number") {
//       numbers.push(item);
//     } else {
//       otherArr.push(item);
//     }
//   }

//   numbers.sort((a, b) => a - b);

//   return { sorted: numbers, otherArr };
// }

// const arr1 = [1, null, 4, false, 33, 44, 2, true];
// const res2 = separateAndSort(arr1);
// console.log("2:", res2);


// 3-masala  

// function separateByType(arr) {
//   const numbers = [];
//   const booleans = [];
//   const nulls = [];

//   for (let item of arr) {
//     if (typeof item === "number") {
//       numbers.push(item);
//     } else if (typeof item === "boolean") {
//       booleans.push(item);
//     } else if (item === null) {
//       nulls.push(item);
//     }
//   }

//   numbers.sort((a, b) => a - b);

//   return {
//     sorted: numbers,
//     otherArr: booleans,
//     other2: nulls,
//   };
// }

// const arr2 = [1, null, 4, false, 33, 44, 2, true];
// const res3 = separateByType(arr2);
// console.log("3:", res3);

// 4-masala  

// function getTypes(arr) {
//   return arr.map(item => {
//     if (item === null) return "null";
//     return typeof item;
//   });
// }

// const arr4 = [1, null, "hello", true, {}, []];
// console.log("4:", getTypes(arr4)) 


//   Uyga vazifa  

// 1-masala  

// function findClosestNeighbours(arr, R) {
//   let closestPair = [];
//   let minDiff = Infinity;

//   for (let i = 0; i < arr.length - 1; i++) {
//     let sum = arr[i] + arr[i + 1];
//     let diff = Math.abs(R - sum);

//     if (diff < minDiff) {
//       minDiff = diff;
//       closestPair = [arr[i], arr[i + 1]];
//     }
//   }

//   return closestPair;
// }

// console.log(findClosestNeighbours([21, 43, 11, 3, 4, 32, 54, 31, 35], 35)); 
 

// 2-masala  

// function replaceNextEven(arr) {
//   let lastEven = null;

//   return arr.map(num => {
//     if (num % 2 === 0) {
//       if (lastEven !== null) {
//         let temp = lastEven;
//         lastEven = num;
//         return num;
//       }
//       lastEven = num;
//     }
//     return num;
//   });
// }

// console.log(replaceNextEven([1, 4, 5, 2, 33, 1, 8, 5, 6, 33, 1, 12, 26]));  


// 3-masala 

// function replaceWithLastOdd(arr) {
//   let lastOdd = arr.filter(x => x % 2 !== 0).slice(-1)[0];

//   return arr.map(num => num % 2 !== 0 ? lastOdd : num);
// }

// console.log(replaceWithLastOdd([2, 55, 2, 21, 44, 3])); 

// 4-masala 

// function swapMinMax(arr) {
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);

//   return arr.map(x => {
//     if (x === min) return max;
//     if (x === max) return min;
//     return x;
//   });
// }

// console.log(swapMinMax([23, 43, 12, 56, 64]));

// 5-masala 

// function zeroBetweenMinMax(arr) {
//   let minIndex = arr.indexOf(Math.min(...arr));
//   let maxIndex = arr.indexOf(Math.max(...arr));

//   let start = Math.min(minIndex, maxIndex);
//   let end = Math.max(minIndex, maxIndex);

//   return arr.map((x, i) => (i > start && i < end ? 0 : x));
// }

// console.log(zeroBetweenMinMax([2, 54, 4, 11, 1, 34, 11]));

// 6-masala  

// function reverseBetweenMinMax(arr) {
//   let minIndex = arr.indexOf(Math.min(...arr));
//   let maxIndex = arr.indexOf(Math.max(...arr));

//   let start = Math.min(minIndex, maxIndex);
//   let end = Math.max(minIndex, maxIndex);

//   let middle = arr.slice(start + 1, end).reverse();

//   return [
//     ...arr.slice(0, start + 1),
//     ...middle,
//     ...arr.slice(end)
//   ];
// }

// console.log(reverseBetweenMinMax([2, 54, 4, 11, 1, 34, 11]));

// 7-masala  

// function removeNumber(arr, k) {
//   return arr.filter((_, index) => index !== k);
// }

// console.log(removeNumber([54, 23, 65, 12], 1)); 


// 8-masala  

// function removeDuplicate(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicate([12, 43, 23, 54, 12])); 

// 9-masala  

// function threeElements(arr) {
//   let count = {};

//   arr.forEach(x => count[x] = (count[x] || 0) + 1);

//   return arr.filter(x => count[x] >= 3);
// }

// console.log(threeElements([12, 12, 44, 54, 44, 44, 2, 22, 2, 2])); 

// 10-masala  

// function arrayIndexSum(arr) {
//   let sum = 0;

//   arr.forEach((num, i) => {
//     if (num % 2 === 0) {
//       sum += i;
//     }
//   });

//   return sum;
// }

// console.log(arrayIndexSum([2, 43, 53, 23, 22, 53, 88, 10])); 
