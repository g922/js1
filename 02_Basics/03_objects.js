//singleton  object declared usingconstructor
//Object.create()

// object literals 
// object defines keys and and value

// now we declare a symbol in the following object
const mySym = Symbol("key1")

const Jsuser = {
name: "gourav",
"full_name": "Kumar Gourav",
//here we declare a symbol as object key value syntax [symbol name ]: "value"
[mySym]:"myKey 1",
age: 18,
location: "jaipur",
email:"abc@gmail.com",
isLoggedIn: false,
lastLoggingDay: ["Monday","Sunday"]
}
console.log(Jsuser.email); //abc@gmail.com
//or we can use square brackets to retrive the data 
//as we specify the key we use it as a sttring
console.log(Jsuser["full_name"]); //Kumar Gourav

console.log(Jsuser[mySym]);//myKey 1
// we can change or override the value


Jsuser.email ="gourav@gmail.com"
// we can also freeze the value that mean rewrite is prohibbeded
// Object.freeze(Jsuser)
// Jsuser.email = "123456@hmail.cin"
// console.log(Jsuser);
// //{
//     name: 'gourav',
//     full_name: 'Kumar Gourav',
//     age: 18,
//     location: 'jaipur',
//     email: 'gourav@gmail.com',
//     isLoggedIn: false,
//     lastLoggingDay: [ 'Monday', 'Sunday' ],
//     [Symbol(key1)]: 'myKey 1'
//   }
// now we can see that after freezing the object the values did not changed


// now we use function here it is treated as an variable it is 1st person to be treated
Jsuser.greeting = function(){
    console.log("hello js user");
    
}
Jsuser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
    // we can print and access the object key it using string interpolation 
}

// to retrive the function we will use its name with ()
//
console.log(Jsuser.greeting());//hello js user
//undefined
console.log(Jsuser.greetingTwo());
//hello js user, gourav

