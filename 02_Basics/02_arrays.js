const mrv = ["marvel","iron"]

const dcx = ["super","bat"]

mrv.push(dcx)
console.log(mrv);// [ 'marvel', 'iron', [ 'super', 'bat' ] ]

//this wil push the array dcx into the mrv array this shows that the js can take any kind of data in the array

 const all=mrv.concat(dcx)
console.log(all); // [ 'marvel', 'iron', [ 'super', 'bat' ], 'super', 'bat' ]   
//in the above concat add two array and make it as one 


// spread operator"...ary name,...ary2"
const all_new = [...mrv,...dcx]
console.log(all_new);//[ 'marvel', 'iron', [ 'super', 'bat' ], 'super', 'bat' ]   
// it does the same thing

// now we will use flat() function which simplifies the the array in recuursively where the array is declared inside the array

const num_array = [1,2,3,[4,5,6],[7,8,9,[10,11,12]]]

const num_array2 = num_array.flat(Infinity)

console.log(num_array2);
// //[
//     1,  2, 3, 4,  5,
//     6,  7, 8, 9, 10,
//    11, 12
//  ]

console.log(Array.isArray("GOURAV"));// false
console.log(Array.from("GOURAV"));// [ 'G', 'O', 'U', 'R', 'A', 'V' ]
console.log(Array.from({name : "gourav"}));// []

let scr1 =100
let src2 = 200
let src3 = 300

console.log(Array.of(scr1,src2,src3));//[ 100, 200, 300 ]
