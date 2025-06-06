let stocks = {
    Fruits: ["Banana", "Apple", "Orange", "Grapes", "Pineapple", "Strawberry", "Watermelon"],
    Liquids: ["Water", "Ice"],
    Holder: ["Cup", "Cone", "Stick"],
    Toppings: ["Chocolate", "Peanuts", "Sprinkles", "Cherries"]
}

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve , reject)=>{
        if(is_shop_open)
        {
            setTimeout(() => {
                resolve(work())
            },time);
        }
        else
        {
            reject(console.log("Shop is closed"));
        }
    })
}

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
    .then(() => {
        return order(0000, () => console.log("Production has started"));
    })
    .then(() => {
        return order(2000, () => console.log("The fruit has been chopped"));
    })
    .then(() => {
        return order(1000, () => console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[1]} was selected`));
    })
    .then(() => {
        return order(1000, () => console.log("Start the machine"));
    })
    .then(() => {
        return order(2000, () => console.log(`Ice cream placed on ${stocks.Holder[0]}`));
    })
    .then(() => {
        return order(3000, () => console.log(`Toppings added: ${stocks.Toppings[0]}, ${stocks.Toppings[1]}`));
    })
    .catch(() => {
        console.log("Customer left");
    })
    .finally(() => {
        console.log("Day ended, shop is closed");
    });