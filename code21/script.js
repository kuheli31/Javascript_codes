/* Create a new button element. Give it a text “click me”

, background color of red & text color

of white.

Insert the button as the first element inside the body tag.*/

newBtn=document.createElement("button");
newBtn.innerText="Click Me";
console.log(newBtn);

let body=document.querySelector("body");
body.before(newBtn);
newBtn.style.backgroundColor="Red";
newBtn.style.color="White";