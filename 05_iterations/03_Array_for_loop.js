//for off
// ["","",""]
//[{},{},{}]
const arr = [1,2,3,5]

// here we can parse iterative values as objects

//it will take values one by one until it element ends

for (const num of arr) {
    console.log(num);
        
}
// 1
// 2
// 3
// 5
// for string
const str = "hello"
for (const s of str) {
    console.log(`each char ${s}`);
    
}
// each char h
// each char e
// each char l
// each char l
// each char o


//maps
 // it is just like an object which stores unique values

 const map = new Map()
map.set('In',"India")
map.set('us',"united states")
map.set('In',"india")

console.log(map);
// Map(2) { 'In' => 'india', 'us' => 'united states' }

for (const key of map) {
    console.log(key);
    
}
// [ 'In', 'india' ]
// [ 'us', 'united states' ]
// for both seperate access we different stack
for (const [key,value] of map) {
    console.log(key, ":-",value);
    
}
// In :- india
// us :- united states

const myObject ={
    'game1':"NFS",
    'game2':'AAC'
}
for (const element of myObject) {
    console.log(element);
    
}
// for (const element of myObject) {
//     ^

// TypeError: myObject is not iterable