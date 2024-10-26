// array is an object collection of multiple items in a single element 
// in js array it is resizable 
//indexing start with 0 and so on
// can contain differ types of data 
// it uses technique of shallow copy or we can say that it uses the reference point to modify and copy array
const myArray = [0,1,2,3,4]

const myHeros = ["boomer","sindra","boogiboogi"]

const myArray2 = new Array(1,2,3,4)

console.log(myArray[2]);//2

//array method 
myArray.push(7)// used to add value in the existing array 
console.log(myArray);//[ 0, 1, 2, 3, 4, 7 ] as we can see that the no 7 has been added

myArray.pop()// uses no argument as its remove last value from the array

console.log(myArray); // [ 0, 1, 2, 3, 4 ]
//
//it is just like push and pop at starting point
myArray.unshift(9)
console.log(myArray);// [ 9, 0, 1, 2, 3, 4 ]

myArray.shift()
console.log(myArray);// [ 0, 1, 2, 3, 4 ]

// same other methods can be used 
//.includes which return the bollean value 
// .index of whic returns the index value if found or else -1
// .join it convert all the values in string 
const newArray = myArray.join()
console.log(newArray); // it will print "0,1,2,3,4" which is in string format

// slice // splice
//slice is a method which return part of array
console.log("a", myArray); // a [ 0, 1, 2, 3, 4 ]
const newA1 = myArray.slice(1,3)
console.log(newA1); // [ 1, 2 ]

//splice it also tajes the part of the array but in this it manuplate the array in which we are implementing and it include the range

console.log("b", myArray); // a [ 0, 1, 2, 3, 4 ]
const newA2 = myArray.splice(1,3)
console.log(newA2); // [ 1, 2, 3 ] after splicing
console.log("c",myArray); // c [ 0, 4 ] as we can see the splice affected the original array
