function sum(a,b){      //sum is a function
    console.log(a+b);//5
}

function calculator(a,b,sumCallback){//sumCallback is a function
    sumCallback(a,b);//sumCallback(2,3)
}

calculator(2,3,sum);//5