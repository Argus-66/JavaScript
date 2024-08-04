// Functions---------------------------------------

function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("G");
    console.log("U");
    console.log("S");
}

sayMyName();

console.log("-------------------------------");

function addTwoNumbers( number1, number2){

    console.log(number1+number2)
}

const result = addTwoNumbers(3,4);
console.log(result);

console.log("-------------------------------");

function addTwoNumbers2( number1, number2){
    //let result = number1 + number2;
    //return result;
    return number1 + number2;
}

const result2 = addTwoNumbers2(5,7);
console.log("Result: ", result2);

console.log("-------------------------------");

function loginUserMessage(username){
    return `${ username }! just logged in.`;
}

console.log(loginUserMessage("John Doe"))
console.log(loginUserMessage())