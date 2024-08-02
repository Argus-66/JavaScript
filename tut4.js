//Object literals

const JsUser = {
    name: "Argus",
    age: 20,
    location: "New York",
    email: "argus@example.com",
    isLoggedIn: true,
    lastLoginDate: ["Monday", "Saturday"]
};

console.log((JsUser));
console.log(JsUser.name);
console.log(JsUser.lastLoginDate[1]);
console.log(JsUser["email"]);