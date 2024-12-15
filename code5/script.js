let correct_number=50;
let num=prompt("Guess a number from (1-50) ?");
//Guessing random number until the user inputs correct number
while(num != correct_number)
{
    num=prompt("Please enter correct number!");
}
console.log("Congratulations! for guessing right number.")