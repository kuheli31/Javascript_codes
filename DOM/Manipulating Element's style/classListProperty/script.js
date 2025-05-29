let title = document.getElementById("title");
console.log(title.classList);

// Add a class to the element
title.classList.add("new" , "another");
console.log(title.classList); // ["title", "new", "another"]

// Remove a class from the element
title.classList.remove("new");
console.log(title.classList); // ["title", "another"]

// Toggle a class on the element
title.classList.toggle("another");
console.log(title.classList); // ["title"]

// Check if the element has a class
console.log(title.classList.contains("title")); // true

//Replace a class on the element
title.classList.replace("title", "new-title");
console.log(title.classList); // ["new-title"]