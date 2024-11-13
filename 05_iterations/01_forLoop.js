// for loop 
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        console.log(" 5 is the best no");
        
    }
    console.log(element);    
    
}
// 0
// 1
// 2
// 3
// 4
//  5 is the best no
// 5
// 6
// 7
// 8
// 9


for (let i = 0; i <=10; i++) {
   for (let j = 0; j <=10; j++) {
    console.log(`inner loop value${j} and outer loop ${i}`);
    
    
   }
    
}

// inner loop value0 and outer loop 0
// inner loop value1 and outer loop 0
// inner loop value2 and outer loop 0
// inner loop value3 and outer loop 0
// inner loop value4 and outer loop 0
// inner loop value5 and outer loop 0
// inner loop value6 and outer loop 0
// inner loop value7 and outer loop 0
// inner loop value8 and outer loop 0
// inner loop value9 and outer loop 0
// inner loop value10 and outer loop 0
// inner loop value0 and outer loop 1
// ............And so on .........
for (let i = 1; i <=10; i++) {
    for (let j = 1; j <=10; j++) {
    console.log(i + "*" + j +"="+ i*j);
    
     
    }
     
 }
//  1*1=1
// 1*2=2
// 1*3=3
// 1*4=4
// 1*5=5
// 1*6=6
// 1*7=7
// 1*8=8
// 1*9=9
// 1*10=10
// 2*1=2
// 2*2=4
// 2*3=6
// 2*4=8
// an so on ..............................


// we work for loop on array

let myArray = ["flash","batman","superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}
// 3
// flash
// batman
// superman


// break and continue 

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`detected 5 `);
        break;
    }
    console.log(`value of 1 is ${index}`);
    
    
}
// value of 1 is 1
// value of 1 is 2
// value of 1 is 3
// value of 1 is 4
// detected 5
// break keyword  will terminated the iteration as soon as it will detect the condition
// while in continue it resume the iteration through starting
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        console.log("5 detected");
        continue
    }
    console.log(i);
    
}
// 0
// 1
// 2
// 3
// 4
// 5 detected
// 6
// 7
// 8
// 9