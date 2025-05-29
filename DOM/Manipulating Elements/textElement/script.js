let menu = document.getElementById("menu");

console.log(menu.textContent);
console.log(menu.innerText);

let sibling = document.querySelector(".about");
let about = sibling.nextElementSibling;
console.log(about.innerText);

about.onclick = function() {
     this.style.color = "red";
    this.style.fontSize = "20px";
}

menu.textContent = "New Menu Text";







    