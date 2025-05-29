const employee = {
    calcTax(){
        console.log("Tax rate is 10%");
    },
};

const manager = {
    salary:50000,
};

manager.__proto__=employee;//prototype inheritance