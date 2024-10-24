const name = "gourav";
const repo = 10;

// normal way to concatenate the string
console.log(name + repo + "value"); //gourav10value

// now modern way to con catenate the string we use backstick as string interpolation which uses ${} pockets to add string

console.log(`hello my name is ${name} and my repo count is ${repo}`);
//hello my name is gourav and my repo count is 10
//

//constructer way to declare the string
const nameGame = new String("assassins creed");
// string is object of javascript which give the intendeation to its element
// if we se in nameGame here a[0],s[1],s[2],..............d[14]

console.log(nameGame[0]); //a
console.log(nameGame.__proto__); //{} show the prototype

//there are various functions which can be used to modify the string
//ex
console.log(nameGame.length); //15
console.log(nameGame.toUpperCase); // ASSASSINS CREED
//charAt
//subString
//indexof
//
//for more methods of string visit "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"