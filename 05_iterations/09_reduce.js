const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
   (accumulator, currentValue) => {
    console.log(`acc :${accumulator},curr :${currentValue}`);
    
   return  accumulator + currentValue
  },initialValue);

console.log(sumWithInitial);
// Expected output: 10


// acc :0,curr :1
// acc :1,curr :2
// acc :3,curr :3
// acc :6,curr :4
// 10


const shoppingcart = [
    {
        itemName: "js course",
        price: 299
    },
    {
        itemName: " python",
        price: 2999
    },
    {
        itemName: " java",
        price: 1999
    },
]

const pricetopay =shoppingcart.reduce((acc,item) => acc + item.price,0)
console.log( pricetopay);
// 5297
