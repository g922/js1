// as we seen before in string here similarly we will define no in two ways 
const score = 400
console.log(score);//400

const balance = new Number(100)
console.log(balance);//[Number: 100]

//as we can see that the both are of same number type but the o/p show different way as in second way of defining the no uses as object type

//some fun of protype of number
console.log(balance.toString().length);//3
//here convert the number into string

console.log(balance.toFixed(2));//here it show fixed decimal val //100.00


const othernum = 23.189
console.log(othernum.toPrecision(3));//23.2 show the precided value

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));//1,00,00,000 here it shows the number into indian number system

//+++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++
console.log(Math);//Object [Math] {} MATHS FUNCTION APPLIED ON NUMBER FOR OPERATION
console.log(Math.abs(-4));//4
console.log(Math.round(4.6));//5
//flour
//power
//sqrt
//max,min
//random 
console.log((Math.random()*10)+1);//usually give no on decimal b/w 0 to 1

//we can use floor function for the single value

console.log(Math.floor(Math.random()*10)+1);

// for printing a range of random no we use the concept of max and min

const min = 10
const max = 20
// function 

console.log(Math.floor(Math.random()*(max-min+1))+min);
// note : in this we use to take range which the (max - min)will provide  +1 so that it will not take 0 and + min for the min value
