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

