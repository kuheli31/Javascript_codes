let stocks = {
    Fruits: ["Banana", "Apple", "Orange", "Grapes", "Pineapple", "Strawberry", "Watermelon"],
    Liquids: ["Water", "Ice"],
    Holder: ["Cup", "Cone", "Stick"],
    Toppings: ["Chocolate", "Peanuts", "Sprinkles", "Cherries"]
}

let is_shop_open = true;

let toppings_choice = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stocks.Toppings[Math.floor(Math.random() * stocks.Toppings.length)]);
        }, 2000);
    });
}

async function Kitchen() {
    console.log("Starting the kitchen process...");
    console.log(`Available fruits: ${stocks.Fruits.join(", ")}`);
    console.log(`Available liquids: ${stocks.Liquids.join(", ")}`);
    console.log(`Available holders: ${stocks.Holder.join(", ")}`);
    await toppings_choice();
    console.log(`Available toppings: ${stocks.Toppings.join(", ")}`);
}

Kitchen();

console.log("Cleaning the kitchen...");
console.log("Cleaning the dishes...");
console.log("Organizing the ingredients...");
console.log("Preparing the kitchen for the next order...");
console.log("Kitchen is ready for the next order!");