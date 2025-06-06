function one(call_two) {
    console.log("Function one called");
    call_two();
}

function two() {
    console.log("Function two called");
}

one(two);