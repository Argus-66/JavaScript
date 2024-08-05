const coding = [ "js", "python", "java", "c", "cpp", "go" ];


const values = coding.forEach((item) => {
    console.log(item);
    return item
})

console.log(values);

console.log("-----------------------------");

const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const newNums = myNums.filter((num) => num>4 )
console.log(newNums);

console.log("-----------------------------");

const newNums2 = myNums.filter((num) => {
    return num>4;
})

console.log(newNums2);

console.log("-----------------------------");

const newNums3 = []

myNums.forEach((num) => {
    if(num > 4) {
        newNums3.push(num);
    }
})

console.log(newNums3);