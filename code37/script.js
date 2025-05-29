const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const button = document.querySelector("#btn");


const getFact = async () =>
{
    console.log("Fetching fact...");
    let response = await fetch(URL);
    console.log("Response received!");
    let data=await response.json();
    factPara.innerText = data.fact;
};

button.addEventListener("click", getFact);