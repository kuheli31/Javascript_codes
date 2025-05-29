let sibling = document.querySelector(".second")
console.log(sibling);

let previousSibling = sibling.previousElementSibling;
console.log(previousSibling);

let nextSibling = sibling.nextElementSibling;
console.log(nextSibling);

let fourthSibling = nextSibling.nextElementSibling;
console.log(fourthSibling);

let lastSibling = sibling.lastElementChild;
console.log(lastSibling);