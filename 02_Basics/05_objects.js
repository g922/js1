// general overview in api object 
// basics destructuring of object
const course ={
    coursename : "javascript",
    price : 1200,
    courseinstructor : "abcd"
}

// now we are destructuring value of course into a little name
const {courseinstructor: instructor} = course
 console.log(instructor); // abcd
 // json file is stored in form of objects

//  {
//     "name" : "apicall"
//     "id" : "152"
//  }
// now we can see further api usage in 
//for users api use"https://randomuser.me/ "
// and for formatting the data use " jason formatter"