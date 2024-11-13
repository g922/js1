// while (condition) {
    
// }
// it is same as for but in this initialize in before and terminates inside the loop
let index = 0
while (index <= 10) {
    console.log(index);
    index =index + 2
}
// 0                                                                      
// 2                                                                      
// 4                                                                      
// 6
// 8
// 10
let myArray = ["flash","batman","superman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr++
}
// value is flash
// value is batman
// value is superman

score = 0
do {
    console.log(`Score is ${score}`);
    score ++
} while (score < 5);
// Score is 0
// Score is 1
// Score is 2
// Score is 3
// Score is 4
