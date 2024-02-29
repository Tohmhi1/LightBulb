const bulb = document.getElementById("bulb");
const button = document.getElementById("btn");
const buttn = document.getElementById("butn");
const handle = document.getElementById("handle");
button.addEventListener("click", switchOn);
// buttn.addEventListener("click", switchOff);
// handle.addEventListener("click", turnOff);
function switchOn(){
  // bulb.style.backgroundColor="yellow"?console.log ("white"): console.log("yellow");
  if (bulb.style.backgroundColor ==="yellow"){
    bulb.style.backgroundColor ="transparent";
    // bulb.style.border="none";
  } 
  else{
    bulb.style.backgroundColor = "yellow";
  }
  // bulb.style.background="linear-gradient(to bottom right, red, orange, yellow, green, blue, indigo, violet)";
  // bulb.style.border = "none";
};
// function switchOff(){
//   bulb.style.background="transparent";
//   bulb.style.border="1px solid black"
// };
// function turnOff(){
//   handle.style.backgroundColor="transparent";
//   handle.style.border ="1px solid white"
// }
