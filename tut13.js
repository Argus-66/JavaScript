const coding = ["js", "python", "java", "c", "cpp", "go"];

const values = coding.forEach((item) => {
  console.log(item);
  return item;
});

console.log(values);

console.log("-----------------------------");

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 4);
console.log(newNums);

console.log("-----------------------------");

const newNums2 = myNums.filter((num) => {
  return num > 4;
});

console.log(newNums2);

console.log("-----------------------------");

const newNums3 = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums3.push(num);
  }
});

console.log(newNums3);

console.log("-----------------------------");

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];



let userBooks = books.filter( (bk) => bk.genre === 'History')

console.log(userBooks);

console.log("-----------------------------");

let userBooks2 = books.filter((bk) => {
    return bk.publish >= 1995
})

console.log(userBooks2);

let userBooks3 = books.filter( (bk) => bk.genre === 'History')

userBooks3 = books.filter( (bk) => { 
  return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks3);