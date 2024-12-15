score=prompt("Enter your score:");
//giving grades to students
if(score>=80 && score<=100)
{
    console.log("Grade:A");
}
else if(score>=70 && score<=89)
{
    console.log("Grade:B");
}
else if(score>=60 && score<=69)
{
    console.log("Grade:C");
}
else if(score>=50 && score<=59)
{
    console.log("Grade:D");
}
else
{
    console.log("Grade:F");
}