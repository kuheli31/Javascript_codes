let btn = document.getElementById("btn");

function displayMessage() {
    console.log("Someone Clicked me!");
    
}

btn.addEventListener("click", displayMessage);

btn.removeEventListener("click", displayMessage);