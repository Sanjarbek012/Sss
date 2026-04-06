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