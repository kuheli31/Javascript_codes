/*Create an array to store companies -> “Bloomberg”,“Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”
a. Remove the first company from the array

b. Remove Uber & Add Ola in its place

c. Add Amazon at the end. */

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// a. Removing the first company from the array
console.log("After removing the first company Bloomberg:");
companies.splice(0, 1);
console.log(companies);

// b. Removing "Uber" & Adding "Ola" in its place
console.log("After removing 'Uber' & adding 'Ola' in its place:");
let uberIndex = companies.indexOf("Uber"); // Find index of "Uber"
if (uberIndex !== -1) {
    companies.splice(uberIndex, 1, "Ola"); // Replace "Uber" with "Ola"
}
console.log(companies);

// c. Adding "Amazon" at the end
console.log("After adding 'Amazon' at the end:");
companies.push("Amazon");
console.log(companies);
