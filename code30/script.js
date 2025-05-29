class person{
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
}

class engineer extends person{
    work(){
        console.log("work");
    }
}

let kuheli=new engineer();