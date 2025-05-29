/*let promise = new Promise((resolve,reject)=>//creating a promise object with resolve and reject as parameters
{
    console.log("Promise is created");
    resolve("Promise is resolved");
});*/

function getData(dataID,getNextData)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            console.log("data",dataID);
            if(getData)
            {
                getNextData();
            }
        },2000);
    });
}