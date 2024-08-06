const div = document.createElement("div");
console.log(div);


div.className = "main";

div.id = Math.round(Math.random() * 10 + 1);


div.setAttribute("title", "generated title");


div.style.backgroundColor = "green";


div.style.padding = "12px";

// div.innerText = "Chai aur code"

const addText = document.createTextNode("Chai aur code");

div.appendChild(addText);

document.body.appendChild(div);


// <div class="main" id="8" title="generated title" style="background-color