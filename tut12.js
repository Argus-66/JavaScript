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

console.log("-----------------------------");

for (const key in programming) {
    console.log(programming[key]);
}

console.log("-----------------------------");

//For Each Loop

const coding = ["js", "python", "java", "c", "cpp", "go"];

coding.forEach(function(item) {
    console.log(item);
});

console.log("-----------------------------");

coding.forEach((item) =>{
    console.log(item)
});

console.log("-----------------------------");

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe);

console.log("-----------------------------");

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

console.log("-----------------------------");

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js",
    },
    {
        languageName: "Python",
        languageFileName: "python",
    },
    {
        languageName: "Java",
        languageFileName: "java",
    },
    {
        languageName: "C",
        languageFileName: "c",
    },
    {
        languageName: "C++",
        languageFileName: "cpp",
    }
]


myCoding.forEach((item) => {
    console.log(item.languageName);
});