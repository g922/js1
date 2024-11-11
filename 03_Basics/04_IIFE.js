// Immediately Invoked Function Expressions (IIFE)



(function chai(){
    console.log('DB CONNected');
    
})();// we should put semicolon to avoid error
//DB CONNected


// global scope pollution to avoid the global scope leakage  we use IIFE

// here we are invoking the function immediately affter its declaration
//using ()() this syntax where in 1st paranthesis we declare and in 2nd we call that function

// using arrow function

((name)=>{
    console.log(`DB CONNECTION TWO ${name}`);
})('gourav')
//DB CONNECTION TWO gourav