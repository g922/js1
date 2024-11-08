//now as wenow about scope it defined inside the curly bracket which is not accessable outside the braces 
// outside the braces variables or object which where defined inside the scope will not be able to access the values
let a = 300;
const b= 200;
if(true){
    let a = 10
    const b = 20
    var c = 30 
 console.log("inner val of a ",a,"and inner value of b ",b);
 //inner val of a  10 and inner value of b  20
}
console.log(a); //300
console.log(b); //200
// for var variables case
console.log(c);//30
//var we dont use it as it access the values out side the scope which is not a good program


//there are two scope *global scope *block scope
// values which is defined in global scope is accessable by block scope
//but the values in block scope should not be accessable by global scope



//closure and nested scope DOM(document object model)
function one(){
    const username = "gourav"
    function two(){
        const website = "ytube"
        console.log(username);
            }
           // console.log(website); it will show error 
            two()
}
one()  // gourav

if (true) {
    const username = "gourav"
    if (username==="gourav") {
        const website = "ytube"
        console.log(username + website);
        //gouravytube
    }
    
}
// console.log(username); it will show undefined error

//+++++++++++++++             =============
 console.log(addone(5));
//6

function addone(num) {
    return num + 1
    
}



// hoisting error as it return value in variable

// addtwo(12)
// ReferenceError: Cannot access 'addtwo' before initialization



const addtwo = function(num){
    return num + 2
}
console.log(addtwo(12));
//14