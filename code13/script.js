//We are given array of marks of students. Filter our of the marks of students that scored 90+.

let marks=[87,93,64,99,86];

let newMarks=marks.filter((mark) => {
    return mark>90;
});
console.log(newMarks);