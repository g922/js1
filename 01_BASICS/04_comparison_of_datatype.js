console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);



console.log("2">1);
console.log(2>"1");

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

// the reason is that an equality check == and comparison <><-<= work differently
// comparison converts null into a number as 0

console.log(undefined > 0);//false for all
// strict check
// in this we use data type check ===
console.log(1==="1"); //it wil check its data type also
