const useremail = "12@sal.com"

if (useremail) {
    console.log("got user email");
    
}else{
    console.log("dont have email");
    
}
// got user email
// the system asumes that the string is denoted as true value
// and the empty string will be denoted as false value
// similarly in numeric 0 asfalse 1 as true
// this types called truthy and false value

//falsy values
// false , 0 ,-0, BigInt 0n ,"", null ,undefined ,NaN

//truthy value
//apart from falsy value all are  truthy values
//"0", "false", "  ", [] , {} ,function (){}


// if we wants to check an empty object then 

const emptyObject ={}
if (Object.keys(emptyObject).length=== 0) {            // "(Object.keys(emptyObject).length=== 0" it converts it into array forms
    console.log("object is empty");
    
}
// object is empty

// nullish Coalescing operator (??) : null and undefined
let val1
val1 =5 ?? 10 // 5
val1 = null ?? 10 //10
val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 20 // 10


console.log(val1);

// ternary operator

const iceTeaPrice =100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("morethan 80");
;
