//dates

let myDate = new Date()
console.log(myDate);// it will print "2024-10-25T17:40:32.565Z" which is not in a readable state

console.log(myDate.toString());//Fri Oct 25 2024 23:14:12 GMT+0530 (India Standard Time) 

console.log(myDate.toDateString());//Fri Oct 25 2024

console.log(myDate.toUTCString());//Fri, 25 Oct 2024 17:49:31 GMT

console.log(myDate.toJSON());//2024-10-25T17:50:56.422Z

console.log(typeof myDate);// object 

let myCreatedDate = new Date(2023, 0, 6)
console.log(myCreatedDate.toDateString());//Fri Jan 06 2023

let myCreatedDate1 = new Date(2023, 0, 6, 5, 5)
console.log(myCreatedDate1.toLocaleString());//1/6/2023, 5:05:00 AM

let myCreatedDate2 = new Date("2023-5-15") // or we can write it in vice versa "15-05-2024"
console.log(myCreatedDate2.toLocaleString());// 5/15/2023, 12:00:00 AM

let timeStamp = Date.now()
console.log(timeStamp)//1729879663494 it is now showed in milliseconds

console.log(myCreatedDate.getTime())//1672943400000 it  is used to compare

//1sec is equals to 1000 millisec so we can directly convert
console.log(Math.floor(Date.now()/1000));//1729879956

// there are method to Date object
//getDay  //getmonth()  //getTime and so on

console.log(myCreatedDate.toLocaleString("default",{
    weekday: "long",
})); // Friday here we can customize how to print the date in our own way

