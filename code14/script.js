/*Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.*/

let n = parseInt(prompt("Enter a number:")); // Take input and convert to integer

// Creating the array
let arr = [];
for (let i = 1; i <= n; i++) { // Loop from 1 to n
    arr.push(i); // Add each number to the array
}
console.log("Array from 1 to n:", arr); // Log the created array

//sum
let sum=arr.reduce((res,curr) => {
    return res + curr;
});
console.log("Sum is=",sum);

//product
let mul=arr.reduce((res,curr) => {
    return res * curr;
});
console.log("Multiplication is=",mul);