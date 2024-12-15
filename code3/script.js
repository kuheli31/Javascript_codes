let Student={
    name:"Kuheli Bera",
    age:"20",
    cgpa:"7.8",
    isPass:"Passed"
};
//using "for-in loop" in object "Student"
for(let key in Student)
{
    console.log("key=",key," value=",Student[key]);
}