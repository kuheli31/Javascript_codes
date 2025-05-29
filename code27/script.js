const student ={
    fullName: "Kuheli Bera",
    marks: 90, 
    printmarks: function(){//defining a function inside an object
        console.log("marks=",this.marks);//this keyword is used to refer to the object itself
    }
};