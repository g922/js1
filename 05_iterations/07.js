const myNumbers = [1,2,3,4,5,6,7,8]

// in maps it will return automatically

 const newNum = myNumbers.map((num) => num + 10)
 console.log(newNum);
//  [
//   11, 12, 13, 14,
//   15, 16, 17, 18
// ]

// chaning
// here ecah chain pass its array to next chain
const newNums = myNumbers.map((num) => num*10).map((num) => num+1)
console.log(newNums);
// [
//     11, 21, 31, 41,
//     51, 61, 71, 81
//   ]