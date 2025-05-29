let btn = document.getElementById("btn");

//btn.addEventListener('click' , function(){
//    console.log("Hey! Everyone clicked me!");
//})

btn.addEventListener('click' , function(event){
    console.log(event.type);
})

