// now we will declare function using function keyword
// there are two ways to call function 
// function by call and function by reference
// function declare
function SayMyName() {
    console.log("G");
    console.log("O");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("V");
    
}

SayMyName()
// G
// O
// U
// R
// A
// V
function addTwoNumber(number1,number2) {
    return number1 + number2
}

// here we have two parse two parameters as it need two values to be declared while calling
console.log(addTwoNumber(56,77));// arguments passed
//133

// suppose if we passed that string and a number
console.log(addTwoNumber(56,"a"));
//56a

//we can store returned values in a variable in javascript
const result = addTwoNumber(25,120)
console.log("result :",result);
//result : 145

function logginUserMessage(username){
    if (username === undefined) {
        console.log("please enter the user name");
        return 
    }
    return `${username} just logged in`
}

console.log(logginUserMessage("gourav"));
//gourav just logged in

console.log(logginUserMessage());


function calculatecartPrice(...num1){
    return num1
}

// if we passes various values then we rest operator
// used as spread or rest used as same operator (...name)

console.log(calculatecartPrice(200,100,600));
//[ 200, 100, 600 ]

// passing objects
const user ={
    username : "gourav",
    price : 200
}
function handleObject(anyobject){
console.log(`user name : ${anyobject.username} pricing : ${anyobject.price}`);

}
handleObject(user)
//user name : gourav pricing : 200


//passing array

const newAraay = [200,400,500,600]

function returnSecondArray(getarray) {
    return getarray[1]
}
console.log(returnSecondArray(newAraay));
//400