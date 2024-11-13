// this is a keybord refers to the context of the object
const user = {
    username : "gourav",
    price : 199,
    webtool : function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}
user.webtool()
// gourav , welcome to website
// { username: 'gourav', price: 199, webtool: [Function: webtool] }

user.username = "sam"
user.webtool()
// sam , welcome to website
// { username: 'sam', price: 199, webtool: [Function: webtool] }

console.log(this);
//{} in global context is empty object

function one(){
    console.log(this);
    
}
one()
// {/* <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]       
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]       
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   crypto: [Getter]
// } */}



 // this can only used inside object not in function
// const chai = function() {
//     let username ="gourav"
//     console.log(this.username)
// }
const chai = () => {
    let username ="gourav"
    console.log(this.username)
}
chai()//undefined

//arrow function syntax " () => {} "
const addtwo = (num1,num2) => {
    return num1+num2
}
console.log(addtwo(2,6))//8
// or we can write implicitly paranthesis return
//  const addTwo = (num1,num2) => (num1+num2)
const addone = () => ({username:"gourav"})
console.log(addone())
// { username: 'gourav' }

console.log(typeof addone);
// function
