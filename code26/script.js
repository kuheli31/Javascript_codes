//Create a toggle button that changes the screen to dark-mode when clicked & light-mode
//when clicked again.

let modebtn=document.querySelector("#mode");
let currMode = "light";
modebtn.addEventListener("click",()=>{
    if(currMode==="light")
    {
        currMode="pink";
        document.querySelector("body").style.backgroundColor="pink";
    }
    else{
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currMode);
});



