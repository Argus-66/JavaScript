const myObject = {
    js: "javascript",
    python: "python",
    java: "java",
    c: "c",
    cpp: "c++",
    go: "go",
    rust: "rust",
}

for (const key in myObject) {
    //console.log(key);
    console.log(`${key}: ${myObject[key]}`);
}