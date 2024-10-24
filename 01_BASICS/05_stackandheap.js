// Stack(primitive) and heap ( non primitive )
// primitive uses a copy of the memory
// non primitive uses the references

 //stack example 
 let name_a = "kumar gourav"
 let name_b = name_a
console.log(name_a);//kumar gourav
console.log(name_b)// kumar gourav

name_b ="gopal"
console.log(name_a);//kumar gourav
console.log(name_b)// gopal


// heap example

let user_one = {
    email : "gourav@google",
    upi : "user@ybl"

}
let user_two = user_one 
console.log(user_two)//{ email: 'gourav@google', upi: 'user@ybl' }
console.log(user_one)//{ email: 'gourav@google', upi: 'user@ybl' }
  

user_two.email = "kumar@sahu"


console.log(user_two)//{ email: 'kumar@sahu', upi: 'user@ybl' }
console.log(user_one)//{ email: 'kumar@sahu', upi: 'user@ybl' }
  