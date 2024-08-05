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