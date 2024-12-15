//For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//Find the average marks of the entire class.
let marks=[85, 97, 44, 37, 76, 60];
let sum=0;
for(let mark of marks)
{
    sum=sum+mark;
}
add=`Sum of all marks is= ${sum}.`;
console.log(add);
average=`Average marks of the entire class= ${sum/(marks.length)}.`;
console.log(average);