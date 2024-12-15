/*For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store final price after
applying offer.*/
let price = [250, 645, 300, 900, 50];

for (let i = 0; i < price.length; i++) {
    let discount = (10 / 100) * price[i]; // Calculate discount for each item
    price[i] = price[i] - discount; // Update the price after applying the discount
}

console.log("After applying offer, the final prices = ", price);
