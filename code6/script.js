//learning to use template literals
let obj={
    item:"pen",
    price:"10"
};


//Output using "console.log"
console.log("Using console.log:","the cost of",obj.item,"is",obj.price,"rupees");


//Output using Template Literals or backtricks or ` `
let output=`Using Template Literals:the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
