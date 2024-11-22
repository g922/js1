// here we gonna use "for in" for objects
// major difference in for in and for of is that we gonna take keys in "for in"and we use values in "for off"
const myObject = {
    js :'java Script',
    cpp : "c++",
    rb : "ruby"
}

for (const key in myObject) {
console.log(key);
console.log( key, ":-" ,myObject[key]);
}
// js
// js :- java Script
// cpp
// cpp :- c++
// rb
// rb :- ruby

const programming = ["js","cpp","rb"]

for (const key in programming) {
 console.log(key);
 console.log(key,":-",programming[key]); 
}
// 0
// 0 :- js
// 1
// 1 :- cpp
// 2
// 2 :- rb

// here it will not take map as it is not iterable
// const map = new Map()
// map.set('In',"India")
// map.set('us',"united states")
// map.set('In',"india")

// // for (const key in map) {
// //    console.log(map);
   
// }