const myNums = [1, 2, 3, 4, 5 ]

const  myTotal = myNums.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue

}, 0)

console.log(myTotal)