let stocks = {
    Fruits: ["Banana", "Apple", "Orange", "Grapes", "Pineapple", "Strawberry", "Watermelon"],
    Liquids: ["Water", "Ice"],
    Holder: ["Cup", "Cone", "Stick"],
    Toppings: ["Chocolate", "Peanuts", "Sprinkles", "Cherries"]
}

let is_shop_open = true;

function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log("Shop is closed"));
        }
    });
}

async function Kitchen() {
    try {
        console.log("Starting the kitchen process...");
        await time(2000);
        console.log(`Available fruits: ${stocks.Fruits.join(", ")}`);
        
        await time(2000);
        console.log(`Available liquids: ${stocks.Liquids.join(", ")}`);
        
        await time(2000);
        console.log(`Available holders: ${stocks.Holder.join(", ")}`);
        
        await time(2000);
        console.log(`Available toppings: ${stocks.Toppings.join(", ")}`);
        
    } catch (error) {
        console.error(error);
    }
    finally {
        console.log("Cleaning the kitchen...");
        console.log("Cleaning the dishes...");
        console.log("Organizing the ingredients...");
        console.log("Preparing the kitchen for the next order...");
        console.log("Kitchen is ready for the next order!");
    }
}

Kitchen();
