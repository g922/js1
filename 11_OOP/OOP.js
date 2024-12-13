// Object literals 
// contains methods and properties

const user ={
    username : "Gourav",
    logInCount : 8,
    SignedIn : true,
    getUserDetails : function(){
        console.log("got user details ");
        console.log(`user name : ${this.username}`);
        
        
        
        console.log(this);       
        // {
//   username: 'Gourav',
//   logInCount: 8,
//   SignedIn: true,
//   getUserDetails: [Function: getUserDetails]
// }


    }
}

console.log(user.username);
console.log(user.getUserDetails());
// Gourav
// got user details 
// user name : Gourav
// undefined
console.log(this); //{}
//  global context is generated as empty stack as it return the members defined in this global context



//constructor function ex new keyword it uses to build new instances for the given function

function User(username, logInCount, isLoggedIn) {
   this.username = username
   this.logInCount = logInCount
   this.isLoggedIn = isLoggedIn

   return this
}

const userOne = User("Gourav", 21, true)
console.log(userOne);
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
//   crypto: [Getter],
//   username: 'Gourav',
//   logInCount: 21,
//   isLoggedIn: true
// // } */}

// now the values will be override if we use 

const userTwo = User("kumar", 11, false)
console.log(userOne);
// username: 'kumar',
//   logInCount: 11,
//   isLoggedIn: false


// values of user one has been changed since it refer to the user two
// so perform seperate user the constructor we new keyword

const user3 = new User("Kumar Gourav", 32, true);
console.log(userTwo);
// username: 'kumar',
//   logInCount: 11,
//   isLoggedIn: false

console.log(user3);
// User { username: 'Kumar Gourav', logInCount: 32, isLoggedIn: true }


// wht happens when new keyword is being punched
// it new empty objects were created which is called instances 
// it implements constructor
// this key word incjects the function