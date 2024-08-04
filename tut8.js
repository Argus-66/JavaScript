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

