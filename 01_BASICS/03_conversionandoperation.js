let a = "33abc"
 console.log(typeof a)

 let b = Number(a)
 console.log(typeof b);
 console.log(b);
 //it will not provide the num it will give NaN
 //some times it convert null into 0
 //it will give NAn to undefined types 
 //it will give 0 or 1 to the given boolean values


let c = 1
let d = Boolean(c)
console.log(d);
//0 =false
//1 =true
//""=false
//"gor"=true




let e = 33
let f = String(e)
console.log(f);
//evry things gets converted into string

//why string to number is conversion system is confusing
//##########################################################################OPERATION###################################################
let value = 3
let negval = -value
console.log(negval);
//normal operation 
//2+2,2-2,2*2,2**2,2/2,2%2
let str1 = "hello"
let str2 = "world"

let str3 = str1 + str2



console.log("1"+2);//out 12
console.log(1+"2");// out 12

console.log("1"+2+2);// out 122
console.log(1+2+"2");//out 32

console.log(+true);//out 1
console.log(+"");//out 0

let counter = 100
++counter//
counter++

console.log(3 + 4 * 5); // 3 + 20
// Expected output: 23

console.log(4 * 3 ** 2); // 4 * 9
// Expected output: 36



console.log((a = b = 5));
// Expected output: 5

const ab = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
const ba = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...

// for more operator precedence
// refer to the given link "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence"
