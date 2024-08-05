const myNums = [1, 2, 3, 4, 5 ]

const  myTotal = myNums.reduce( (acc, cur) => acc+cur , 0)

console.log(myTotal)


const shoppingCart = [
    {
        itemName: "apple",
        price: 20,
    },
    {
        itemName: "banana",
        price: 15,
    },
    {
        itemName: "orange",
        price: 30,
    },
    {
        itemName: "grape",
        price: 40,
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay)