let inputbox = document.getElementById("username");

console.log(inputbox.style.backgroundColor);//lightcoral

inputbox.style.padding = "80px";
console.log(inputbox); // 10px

inputbox.style.cssText = "background-color: red; padding: 10px; border: 2px solid black; font-size: 20px; color: white;";
console.log(inputbox)

inputbox.style.cssText += "background-color: red; padding: 10px; border: 2px solid black; font-size: 20px; color: white;";
console.log(inputbox)

