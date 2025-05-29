let li = document.querySelector("li");
let parentNode = li.parentNode;

let newHeading = document.createElement("h1");
newHeading.textContent = "Replaced Home";

//parentNode.replaceChild(newNode, oldNode);

parentNode.replaceChild(newHeading, li);
