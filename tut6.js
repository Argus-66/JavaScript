// Functions---------------------------------------

function sayMyName() {
  console.log("A");
  console.log("R");
  console.log("G");
  console.log("U");
  console.log("S");
}

sayMyName();

console.log("-------------------------------");

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

const result = addTwoNumbers(3, 4);
console.log(result);

console.log("-------------------------------");

function addTwoNumbers2(number1, number2) {
  //let result = number1 + number2;
  //return result;
  return number1 + number2;
}

const result2 = addTwoNumbers2(5, 7);
console.log("Result: ", result2);

console.log("-------------------------------");

function loginUserMessage(username) {
  if (!username) {
    console.log("Username is required.");
    return;
  }
  return `${username}! just logged in.`;
}

console.log(loginUserMessage("John Doe"));
console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(2, 3, 4, 5, 6, 7, 8, 9, 10));

console.log("-------------------------------");

const user = {
    username: "John Doe",
    price: 999,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`);
}

handleObject(user);
console.log("-------------------------------");

handleObject({
    username: "Sam", 
    price: 1999
});

console.log("-------------------------------");

const myNewArray = [1, 2, 3, 4, 5];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));

console.log("-------------------------------");

console.log(returnSecondValue([
    200,300,400,1000
]));