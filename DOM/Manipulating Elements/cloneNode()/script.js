let menu = document.getElementById("menu");

let newNode = menu.cloneNode(true); // Deep clone
console.log("Original Menu:", menu);
console.log("Cloned Menu:", newNode);

// Optionally append the clone to the body (or somewhere else in the DOM)
document.body.appendChild(newNode);
