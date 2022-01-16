/* Is size a valid integer 2-50? */

function validateEdge(size) {
  return (Number.isInteger(size) &&
      size >= 2 &&
      size <= 50);
}
/* Handle UI: get form data & update HTML */

function processForm(evt) {
  evt.preventDefault();
  const sides = getInputs();

  const aOk = validateEdge(sides.a);
  const bOk = validateEdge(sides.b);
  const values = findAreaAndHypt(sides.a, sides.b);
  const msg = makeMessage(aOk, bOk, values.area, values.hypot);

  let aMsg = aOk ? "" : "Invalid!";
  let bMsg = bOk ? "" : "Invalid!";

  displayMessages(aMsg, bMsg, msg);
}

function findAreaAndHypt(a, b){
    let area = a * b / 2;
    let hypot = Math.floor(Math.sqrt(a * a + b * b));
    return {
      area, 
      hypot
    }
}

function makeMessage(aOk, bOk, area, hypot){
  let message;
  if (aOk && bOk) {
    message = `Hypotenuse is ${hypot} and area is ${area}.`;
    if (area > 50) {
      message += ` That's a really big triangle!`;
    }
  } else {
    message = "";
  }
  return message;
}

function displayMessages(aMsg, bMsg, msg){
  document.getElementById("a-msg").innerHTML = aMsg;
  document.getElementById("b-msg").innerHTML = bMsg;
  document.getElementById("msg").innerHTML = msg;
}

function getInputs(){
  let a = +document.getElementById("side-a").value;
  let b = +document.getElementById("side-b").value;
  return {
    a,
    b
  }
}