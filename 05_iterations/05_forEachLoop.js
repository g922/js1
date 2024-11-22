const coding = ["js","c++","python","java"]
// 
// here we will be using forEach function as extention of array where it will perform as an cll back function which has no name 
// in this we will extract each items in parameter
// and we cam perform the operations
//
coding.forEach(function (item) {
    console.log(item);
    
})//
// js
// c++
// python
// java


// using arrow function
coding.forEach( (item) =>{
  console.log(item);
  
})
// js
// c++
// python
// java

function printMe(item) {
    console.log(item);
    
}
coding.forEach(printMe)

// js
// c++
// python
// java


coding.forEach( (item , index , arr) =>{
    console.log(item, index, arr);
    
  })
//   js 0 [ 'js', 'c++', 'python', 'java' ]
// c++ 1 [ 'js', 'c++', 'python', 'java' ]
// python 2 [ 'js', 'c++', 'python', 'java' ]
// java 3 [ 'js', 'c++', 'python', 'java' ]

const mycoding =[
    {
        1 : "java",
        2 : "js"
    },
    {
        3 : "python",
        4 : "c"
    },
    {
        5 : "ruby",
        6 : "c++"
    },

]

mycoding.forEach( (item) => {
    console.log(item[6]);
    
} )
// c++