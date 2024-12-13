const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //DB calls ,cryptography, network
    setTimeout(()=>{
        console.log('Asynch task is complete');
        resolve()
    },1000)
})
 // .then will set an connection  with resolve 
promiseOne.then(()=>{
console.log("promise consumed");

})
// here after connecting the resolve with .then it return value to .then function
//o/p
// Asynch task is complete
// promise consumed


// without using var
new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log("Asynch task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("async 2 promise consumed or resolved");
    
})

// third example of async promise returning the value to then 
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({userName :'goku',email : "gourav@email.co"})
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);
    
})

// {userName :'goku',email : "gourav@email.co"}



// fourth promise

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "Gourav",password : "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
        
    },1000)
})
// chaning of the .then function
//thenables = 
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((userName)=>{
    console.log(userName);
    
})
.catch((err)=>{
    console.log(err);
    
}).finally(() => console.log(" the promise is finally resolved"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Nagesh",password : "123"})
        } else{
            reject('ERROR:Nagesh went wrong')
        }
        
    },1000)
})

async function consumePromiseFive() {

   try {
    const response = await  promiseFive
   console.log(response);
   
   } catch (error) {
    console.log(error);
    
   }
}

consumePromiseFive()


async function getallUsers() {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    const data =  await response.json()
    console.log(data);
    
}

// getallUsers()


// another way to handle fetch promises 
//using .then function  .catch

fetch ('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
  return response.json()
})
.then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})