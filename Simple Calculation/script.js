let valueOne = prompt("User Input Value One");
let valueTwo = prompt("User Input Value Two");

valueOne = parseInt (valueOne);
valueTwo = parseInt (valueTwo);

const Result1 = valueOne + valueTwo;
const Result2 = valueOne - valueTwo;
const Result3 = valueOne * valueTwo;
const Result4 = valueOne / valueTwo;
const Result5 = valueOne % valueTwo;

document.write("Input Value One: " + valueOne + "<br>");
document.write("Input Value Two: " + valueTwo + "<br>" + "<br>");
document.write("Output for Sumation: " + Result1 + "<br>");
document.write("Output for Subtraction: " + Result2 + "<br>");
document.write("Output for Multipication: " + Result3 + "<br>");
document.write("Output for Division: " + Result4 + "<br>");
document.write("Output for Modulas: " + Result5 + "<br>");