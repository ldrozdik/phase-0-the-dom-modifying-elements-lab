// Write your code here!
const element = document.getElementById("main");
element.remove("main");

const newHeader = document.createElement("h1");
newHeader.id = "victory";

newHeader.textContent = "Lindsay is the champion";

