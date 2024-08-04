function one() {
  const username = "John Doe";

  function two() {
    const website = "https://www.example.com";
    console.log(`Username: ${username}, Website: ${website}`);
  }
  //console.log(website); // ReferenceError: website is not defined

  two();
}

one();

console.log("-------------------------------");

if (true) {
  const username = "Jane";
  if (username === "Jane") {
    const website = " https://www.jane.com";
    console.log(username + website);
    console.log(`Username: ${username}, Website: ${website}`);
  }
  //console.log(website); // ReferenceError: website is not defined
}

//console.log(username); // John Doe

console.log("-------------------------------");




function addone(num){
    return num + 1;
}

console.log(addone(5));

const addtwo = function(num){
    return num + 2;
}

console.log(addtwo(5));