// Write your code here!
// remove the <main> element with id="main"
document.querySelector("#main").remove();

// create a new <h1> element with id="victory" and a message
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "YOUR-NAME is the champion";

// add the new <h1> element to the document body
document.body.appendChild(newHeader);