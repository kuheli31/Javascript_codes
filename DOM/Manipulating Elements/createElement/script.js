let div = document.createElement("div");
console.log(div);

//Adding to console
div.innerHTML = "<h1>Hello World!</h1>";
console.log(div);

//Adding to web page
document.body.appendChild(div);
console.log(div);

div.id = "title";
console.log(div);

div.className = "header";
console.log(div);

