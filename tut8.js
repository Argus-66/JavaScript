const user = {
    username: "John Doe",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to our website!`);
        console.log(this);
    }

}

user.welcomeMessage();
user.username = "Marry Jane";
user.welcomeMessage();


console.log(this); // Window {...}

console.log("-------------------------------");

function chai() {
    console.log(this);
}

chai();

console.log("-------------------------------");

function chai1() {
    let username = "John Doe";
    console.log(this.username);
}

chai1();

console.log("-------------------------------");

const chai2 = function() {
    let username = "John Doe";
    console.log(this.username);
}

chai2();

console.log("-------------------------------");

const chai3 = () => {
    let username = "John Doe";
    console.log(this.username);
}

chai3();

console.log("-------------------------------");

const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(2, 3));

console.log("-------------------------------");

const addTwo1 = (num1, num2) =>  num1 + num2;

console.log(addTwo1(2, 3));

console.log("-------------------------------");

const addTwo2 = (num1, num2) =>  (num1 + num2);

console.log(addTwo2(2, 3));

console.log("-------------------------------");

const addTwo3 = (num1, num2) => ({username: "John Doe"});

console.log(addTwo3(2, 3));

console.log("-------------------------------");

