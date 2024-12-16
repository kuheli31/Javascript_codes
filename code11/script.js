/*Create a function using the “function” keyword that takes a String as an argument &
returns the number of vowels in the string.*/

function count(str)
{
    let i=0;
    let len=str.length;
    let c=0;
    for(i=0;i<len;i++)
    {
        let ch = str[i].toUpperCase();
        if(ch==='A' || ch==='E' || ch==='I' || ch==='O' || ch==='U')
        {
            c++;
        }
    }
    return c;
};
let p=count("KUHELI BERA");
console.log(p);

//Create an arrow function to perform the same task.
const count1=(str)=>{
    let i=0;
    let len=str.length;
    let c=0;
    for(i=0;i<len;i++)
    {
        let ch = str[i].toUpperCase();
        if(ch==='A' || ch==='E' || ch==='I' || ch==='O' || ch==='U')
        {
            c++;
        }
    }
    return c;
};
let q=count1("KUHELI BERA");
console.log(q);
