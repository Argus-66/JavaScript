const myObject = {
    js: "javascript",
    python: "python",
    java: "java",
    c: "c",
    cpp: "c++",
    go: "go",
    rust: "rust",
}

console.log("-----------------------------");

for (const key in myObject) {
    //console.log(key);
    console.log(`${key}: ${myObject[key]}`);
}

const programming = ["javascript", "python", "java", "c", "cpp", "go"]

for (const key in programming) {
    console.log(key);
}