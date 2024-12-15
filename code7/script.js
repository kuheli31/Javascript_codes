/*Prompt the user to enter their full name. Generate a username for them based on the input.
Start username with @, followed by their full name and ending with the fullname length.
eg: user name = “kuhelibera” , username should be “@kuhelibera13” */

let name = prompt("Enter your full name:");

// Convert the input "name" to lowercase for making the username
let lower = name.toLowerCase();

// Remove leading and trailing spaces from the input
let trimmed = lower.trim();

// Remove all spaces in the trimmed name
let noSpaces = trimmed.replace(/\s+/g, '');

// Generate the username starting with '@', followed by the full name, and ending with the length
let username = `@${noSpaces}${noSpaces.length}`;

console.log(username); // Display the generated username
