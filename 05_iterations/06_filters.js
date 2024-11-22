// const coding = ["js","c++","python","java"]

// const values = coding.forEach(function (item) {
    
//     return item
// })
// console.log(values);
// // undefined


const num = [1,2,3,4,5,6]


// usually filter is method which returns the selected values accordding to condition 
// without using scope
const newNum = num.filter((num) => num >3)

console.log(newNum);
// [ 4, 5, 6 ]
//

// with the use of scope
const newNum1 = num.filter( (num) => {
    return num >3

})

console.log(newNum1);
// [ 4, 5, 6 ]




// for each
const newNum2 = []
num.forEach((num) => {
    if (num>4) {
        newNum2.push(num)
    }
})
console.log(newNum2);
// [ 5, 6 ]


const Book = [
    {title : "abc",genre : "science",published : 2000},
    {title : "vcd",genre : "math",published : 2010},
    {title : "hif",genre : "science",published : 1980},
    {title : "jsi",genre : "math",published : 2004},
]
const myBook = Book.filter( (bk) => bk.genre === 'math')
console.log(myBook);
// [ { title: 'vcd', genre: 'math' }, { title: 'jsi', genre: 'math' } ]   

const myBook1 = Book.filter( (bk) => bk.published > 2000 && bk.genre === 'math')
console.log(myBook);
// [
//     { title: 'vcd', genre: 'math', published: 2010 },
//     { title: 'jsi', genre: 'math', published: 2004 }
//   ]