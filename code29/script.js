class ToyotaCar{
    constructor(brand,mileage){
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }

    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

}

let fortuner = new ToyotaCar("fortuner",10);//creating object of class and the properties and methods of class are inherited by object
console.log("fortuner");
let lexus = new ToyotaCar("lexus",12);//creating object of class and the properties and methods of class are inherited by object
console.log("lexus");