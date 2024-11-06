// const tndUser = new Object()
const tndUser = {}

tndUser.id = 123
tndUser.isRegular = false

console.log(tndUser); // { id: 123, isRegular: false }

// we can also define objects inside object called as nestd of object

const regualrUser = {
    email : "some@yl.com",
    fullname : {
        username : {
            firstname :"kumar",
            lastname : "gourav"
        }
    }
}
console.log(regualrUser);
// {
//     email: 'some@yl.com',
//     fullname: { username: { firstname: 'kumar', lastname: 'gourav' } }
//   }
console.log(regualrUser.fullname);
//{ username: { firstname: 'kumar', lastname: 'gourav' } }   

console.log(regualrUser.fullname.username);
// { firstname: 'kumar', lastname: 'gourav' }

console.log(regualrUser.fullname.username.firstname);
//kumar


const obj1 = {1: "a",2: "b"}
const obj2 = {3:"c", 4: "d"}

// const obj3 = {obj1,obj2}
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//we merge two object using static method to join two object using  Object.assign() method

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// most commonly used operator to merge object are spread operator
// same as we did in array {...objname,...objname}

const obj4 ={...obj1,...obj2}
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// array of object
let user = [
    {id : 1,
        email : "sak@"
    },
    {id : 1,
        email : "sak@"
    },
    {id : 1,
        email : "sak@"
    },
   
]
user[1].email// is way to get the data 

// to retrieve the keys , entries and values they are stored in arrays 
console.log(Object.keys(tndUser));
//[ 'id', 'isRegular' ]
console.log(Object.values(tndUser));
// [ 123, false ]
console.log(Object.entries(tndUser));
//[ [ 'id', 123 ], [ 'isRegular', false ] ]

//wnna check about the property then use onjname.hasOwnProperty('propertyName')
console.log(tndUser.hasOwnProperty('isRegular'));
//true
