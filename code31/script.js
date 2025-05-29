/*You are creating a website for your college. Create a class User with 2 properties, name &
email. It also has a method called viewData( ) that allows user to view website data.

Create a new class called Admin which inherits from User. Add a new method called
editData to Admin that allows it to edit website data.*/

let data="website data";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("data=",data);
    }
}

class Admin extends User{

    constructor(name,email){
        super(name,email);
    }

    editData(){
        data="new website data";
    }
}

let student1=new User("Durjoy","durjoy@gmail");
let student2=new User("Rahman","rahman@gmail");
let admin=new Admin("Admin","admin@gmail");
