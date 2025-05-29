let menu = document.getElementById("menu");

let node = document.createElement(".message");
node.innerHTML = "<div>Currently in div</div>"

menu.after(node)
menu.after(node1 , node2 , node3 , ...);
menu.after(str1 , str2 , ...)

console.log(menu);
